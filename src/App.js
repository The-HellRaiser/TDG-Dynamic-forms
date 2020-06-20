import React,{Component} from 'react';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'
import './App.css';
import Field from './Component/Field/Field';


//NOTE: Name ,type and ID are mandatory for every field

/* Additional properties for fields:

  1)TextField: placeholder,pattern(regex)
  2)Radio: value (name should be different for different groups and common for radio buttons of same group)
  3)CheckBox: value
  4)Email: placeholder
  5)Number: min,max

  NOTE: Add dependent elements paremeter called dependentChildren like shown below if needed

*/


















class App extends Component{
  json={
    fields:[
      {               //-------->TextField
        name:'Text Field Demo',
        id:'textfield',
        type:'text',
        placeholder:'I am a textField',
        pattern:'([a-z]+)-([1-9]+)'
      },
      {               //-------->Radio
        name:'Radio Demo Group 1',
        id:'radiofield',
        type:'radio',
        value:'Male'
      },
      {               //-------->Radio
        name:'Radio Demo Group 1',
        id:'radiofield',
        type:'radio',
        value:'Female'
      },
      {               //-------->CheckBox
        name:'Check Box Demo',
        id:'checkboxfield',
        type:'checkbox',
        value:'checkme',
      },
      {               //-------->Email
        name:'Email Field',
        id:'emailfield',
        type:'email',
        placeholder:'I am a Email'
      },
      {               //-------->Number
        name:'Number Field',
        id:'numberField',
        type:'number',
        min:0,
        max:100
      },
      {               //-------->SingleSelect
        name:'Single Select Field',
        id:'selectfield',
        type:'select',
        multiple:false,
        options:['op1','op2','op3']
      },
      {               //-------->MultipleSelect
        name:'Multiple Select Field',
        id:'mulselfield',
        type:'select',
        multiple:true,
        options:['op1','op2','op3']
      },
      {               //-------->TextArea
        name:'Text Area Field',
        id:'mulselfield',
        type:'textarea',
      },



      {
        name:'Parent Element',
        id:'parentelemt',
        type:'text',
        dependentChildren:['childelement1','childelement2']
      },
      {
        name:'Child Element 1',
        id:'childelement1',
        type:'text',
      },
      {
        name:'Child Element 2',
        id:'childelement2',
        type:'text',
      }


    ] 
  }
  render()
  {
    return(
      <div className='jumbotron' style={{backgroundColor:'rgb(31, 39, 57)',color:'white', borderRadius:'0'}}>
      <h3 className='text-center'>TDG PARTNER DYNAMIC FORMS</h3>
      <form style={{width:'30%'}}>
      <div className='form-group'>
      {this.json.fields.map((field,ind)=>{return <Field field={field} key={ind}/>})}
      <input className='btn btn-primary form-control' type='submit'value='submit'></input>
      </div>
      </form>
      </div>
    );
  }
}

export default App;
