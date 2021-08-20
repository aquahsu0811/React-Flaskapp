import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import CustomizedSlider  from './Slider';
import IconLabelButtons from './ButtonType';
import ImageUploadCard from './ImgReader';
import reportWebVitals from './reportWebVitals';
import { withStyles } from '@material-ui/core/styles';
import { green } from '@material-ui/core/colors';
import FormGroup from '@material-ui/core/FormGroup';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Checkbox from '@material-ui/core/Checkbox';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import CheckBoxIcon from '@material-ui/icons/CheckBox';
import Favorite from '@material-ui/icons/Favorite';
import FavoriteBorder from '@material-ui/icons/FavoriteBorder';

const GreenCheckbox = withStyles({
  root: {
    color: green[400],
    '&$checked': {
      color: green[600],
    },
  },
  checked: {},
})((props) => <Checkbox color="default" {...props} />);

export default function CheckboxLabels() {
  const [state, setState] = React.useState({
    checkedA: true,
    checkedB: true,
    checkedF: true,
    checkedG: true,
  });

  const handleChange = (event) => {
    setState({ ...state, [event.target.name]: event.target.checked });
  };

  return (
    <FormGroup row>
      <FormControlLabel
        control={<Checkbox checked={state.checkedA} onChange={handleChange} name="checkedA" />}
        label="Secondary"
      />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedB}
            onChange={handleChange}
            name="checkedB"
            color="primary"
          />
        }
        label="Primary"
      />
      <FormControlLabel control={<Checkbox name="checkedC" />} label="Uncontrolled" />
      <FormControlLabel disabled control={<Checkbox name="checkedD" />} label="Disabled" />
      <FormControlLabel disabled control={<Checkbox checked name="checkedE" />} label="Disabled" />
      <FormControlLabel
        control={
          <Checkbox
            checked={state.checkedF}
            onChange={handleChange}
            name="checkedF"
            indeterminate
          />
        }
        label="Indeterminate"
      />
      <FormControlLabel
        control={<GreenCheckbox checked={state.checkedG} onChange={handleChange} name="checkedG" />}
        label="Custom color"
      />
      <FormControlLabel
        control={<Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite />} name="checkedH" />}
        label="Custom icon"
      />
      <FormControlLabel
        control={
          <Checkbox
            icon={<CheckBoxOutlineBlankIcon fontSize="small" />}
            checkedIcon={<CheckBoxIcon fontSize="small" />}
            name="checkedI"
          />
        }
        label="Custom size"
      />
    </FormGroup>
  );
}

class Flask extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      isLoaded: false,
      items: [],
    };
  }

  componentDidMount() { // before render
    fetch("http://localhost:5000/api/v1.0/test")
      .then(res => res.json()) // res == result
      .then(
        (result) => {
          this.setState({
            isLoaded: true,
            items: result.items,
          });
        },
        (error) => {
          this.setState({
            isLoaded: true,
            error,
          });
        }
      )
  }

  renderCheckbox(){
    return(
      <CheckboxLabels  />
    )
  }

  renderSlider(){
    return(
      <CustomizedSlider />
    )
  }

  render() {
    const {error, isLoaded, items} = this.state;
    console.log(items)
    if (error) { // fetch api return error  from line25
      return <div>Error: {error.message}</div>;
    } else if (!isLoaded) {
      return <div>Loading...</div>;
    } else {
      return (
        <div className="Flask">
          <header className="Flask-header">
          <ul>
            {items.map(item => (
              <li key={item.id}>
                {item.id} {item.img}
              </li>
            ))}
            <div className="checkbox">
              {this.renderCheckbox()}
            </div>
            <div className="slider">
              {<CustomizedSlider />}
            </div>
            <div className="imgreader">
              {<ImageUploadCard /> }
            </div>
            <div className="button_t">
              { <IconLabelButtons /> }
            </div>
          </ul>
          </header>
        </div>

      );
    }
  }
}

ReactDOM.render(
  //<React.StrictMode>
//    <App />
  //</React.StrictMode>,
  <Flask />,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();





