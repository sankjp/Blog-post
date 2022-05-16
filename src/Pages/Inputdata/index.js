import React, { useState } from "react";
import Button from "../../Components/Button/button";
import Post from "../../Components/Post/post";

const Inputdata=()=>{
    const[name,setName]=useState("");
    const[body,setBody]=useState("");
    const[list,setList]=useState([]);

    const submitDetails=(e)=>{
        e.preventDefault();
        console.log(name,body);
        const data={name,body}
        
        if(name && body){
            setList((lst)=>[...lst,data]);
            setName("");
            setBody("");
        };
    }

    return(
        <div>
            <form onSubmit={submitDetails}>
                <input type="text" className="inpt_name" placeholder="Enter Name Here" value={name} onChange={(e)=>setName(e.target.value)}/>
                <input type="text" className="inpt_description" placeholder="Describe Details" value={body} onChange={(e)=>setBody(e.target.value)}/>
                <Button type="primary" label="Add"/>
            </form>

            {list.map((item,index)=>{
                return(<Post details={item} key={index}/>)})}
        </div>
    );
};

export default Inputdata;