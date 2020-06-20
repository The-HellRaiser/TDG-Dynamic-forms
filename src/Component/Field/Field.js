import React,{Component} from 'react';
class Field extends Component
{
    id=this.props.field.id;
    blurHandler=(eve)=>
    {
        console.log(eve.target.id+" (id)->(value) "+eve.target.value);
    }
    changeHanler=(eve)=>
    {
        if(this.props.field["dependentChildren"]!=null)
        {
            this.props.field.dependentChildren.map((child)=>{document.getElementById(child).value=eve.target.value; return null;})
        }
    }
    createField=()=>
    {
        var field=this.props.field;
        var res=null
        if(field.type==='select')
        {
            res=<div className='form-group'>
            <label className='control-label' htmlFor={field.id}>{field.name}</label>
            <select className='form-control' name={field.name} multiple={field.multiple} id={field.id} onBlur={(eve)=>{this.blurHandler(eve)}} onChange={(eve)=>{this.changeHanler(eve)}}>
            {field.options.map((value,ind)=>{return <option value={value} key={ind}>{value}</option>})}
            </select>
            </div>
            return res;
        }
        if(field.type==='textarea')
        {
            res=
            <div className='form-group'>
            <label htmlFor={field.id}>{field.name}</label>
            <textarea  className='form-control' name={field.name} id={field.id} onBlur={(eve)=>{this.blurHandler(eve)}} onChange={(eve)=>{this.changeHanler(eve)}}></textarea>
            </div>
            return res;
        }
        if(field.type==='radio' || field.type==='checkbox')
        {
            return <div className=' form-check'>
            <input  className='form-check-input' id={field.id} type={field.type} name={field.name} onBlur={(eve)=>{this.blurHandler(eve)}} onChange={(eve)=>{this.changeHanler(eve)}}></input>
            <label className='form-check-label' htmlFor={field.id}>{field.value}</label>
            </div>
        }
        return <div className='form-group '>
        <label className='control-label' htmlFor={field.id}>{field.name}</label>
        <input  className='form-control' id={field.id} type={field.type} name={field.name} min={field.min} max={field.max} value={field.value} pattern={field.pattern} placeholder={field.placeholder} onBlur={(eve)=>{this.blurHandler(eve)}} onChange={(eve)=>{this.changeHanler(eve)}}></input>
        </div>
    }
    render()
    {
        return(
            this.createField()
        );
    }
}
export default Field;