import { useState } from "react";
export function Cv(){
const[first,setfirst]=useState('')
const[last,setlast]=useState('')
const[birth,setbirth]=useState('')
const[nation,setnation]=useState('')
const[level,setlevel]=useState('')
const[major,setmajor]=useState('')
const[instit,setinstit]=useState('')
const[gradyear,setgradyear]=useState('')
const[title,settitle]=useState('')
const[comp,setcomp]=useState('')
const[start,setstart]=useState('')
const[end,setend]=useState('')
return <>
<div id="input">
<div id="generalin">
    <p className="title">General</p>
    <label htmlFor="first">Firstname: </label>
    <input type="text" id="first" name="first" onChange={(event)=>{
        setfirst(event.target.value)
    }} />
    <label htmlFor="last">Lastname: </label>
    <input type="text" id="last" name="last" onChange={(event)=>{
        setlast(event.target.value)
    }}/>
    <label htmlFor="birth">Birthday: </label>
    <input type="date" name="birth" id="birth" onChange={(event)=>{
        setbirth(event.target.value)
    }} />
    <label htmlFor="nation">Nationality: </label>
    <input type="text" id="nation" name="nation" onChange={(event)=>{
        setnation(event.target.value)
    }}/>

</div>
<div id="edin">
<p className="title">Education</p>
<label htmlFor="level">Degree level: </label>
<input type="text" name="leve" id="level" placeholder="Bachelor/Masters/Phd" onChange={(event)=>{
    setlevel(event.target.value)
}} />
<label htmlFor="major">Major: </label>
<input type="text" name="major" id="major" placeholder="Computer Science/Electrical Engineering" onChange={(event)=>{
    setmajor(event.target.value)
}}/>
<label htmlFor="instit">Institution: </label>
<input type="text" name="instit" id="instit" placeholder="Harvard/West Point..."  onChange={(event)=>{
    setinstit(event.target.value)
}}/>
<label htmlFor="grad">Year of completion</label>
<input type="date" id="grad" name="grad" onChange={(event)=>{
    setgradyear(event.target.value)
}} />
</div>
<div id="expin">
    <p className="title">Work Experience</p>
    <label htmlFor="title">Job title: </label>
    <input type="text" name="title" id="title" placeholder="Project Manager/Welder/Security Guard" onChange={(event)=>{
    settitle(event.target.value) }} />
    <label htmlFor="company">Company or Institution: </label>
    <input type="text" name="company" id="company" onChange={(event)=>{
        setcomp(event.target.value)
    }}/>
    <label htmlFor="startdate">Start-date: </label>
    <input type="date" name="startdate" id="startdate" onChange={(event)=>{
        setstart(event.target.value)
    }} />
    <label htmlFor="enddate">End-date: </label>
    <input type="date" name="enddate" id="enddate" onChange={(event)=>{
        setend(event.target.value)
    }}/>
</div>

</div>
<div id="output">
<div id="generalout">
    <p id="name">{first} {last}</p>
    <p id="birth">{birth}</p>
    <p id="nationality">{nation}</p>
</div>
<div id="edout">
    <p className="outtitle">Education</p>
    <p>{level} {major}</p>
    <p> {instit}</p>
    <p>{gradyear}</p>

</div>
<div id="expout">
    <p className="outtitle">Work Experiemce</p>
    <p>{title}</p>
    <p>{comp}</p>
    <p>{start} till {end}</p>
</div>
</div>


</>
}