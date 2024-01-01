import React, { useEffect, useState } from 'react'
import Collapse from 'react-bootstrap/Collapse';
import { TextField } from '@mui/material';
import { BASE_URL } from '../services/baseURL';
import { toast } from 'react-toastify';
import { editProfileAPI } from '../services/allAPI';

function Profile() {


    const [open, setOpen] = useState(false);

    const [isUpdate, setIsUpdate] = useState(false)

    const [userProfile, setUserProfile] = useState({
        username:"",
        email:"",
        password:"",
        github:"",
        linkedin:"",
        profile:""

    })
    const [formChanged, setFormChanged] = useState(false);


    //once an image is uploaded then that image will be stored in existing image
    const [existingImage, setExistingImage] = useState("")
    //preview is to hold url of the new image
    const [preview,setPreview] = useState("")

    useEffect(() => {
        // Check for form changes
        const user = JSON.parse(sessionStorage.getItem("existingUser"));
        
        if (
            userProfile.username !== user.username ||
            userProfile.email !== user.email ||
            userProfile.password !== user.password ||
            userProfile.github !== user.github ||
            userProfile.linkedin !== user.linkedin ||
            userProfile.profile
        ) {
          setFormChanged(true);
        } else {
          setFormChanged(false);
        }
    }, [userProfile]);
       
    useEffect(()=>{
        const user = JSON.parse(sessionStorage.getItem("existingUser"))
        setUserProfile({...userProfile,username:user.username,email:user.email,password:user.password,github:user.github,linkedin:user.linkedin,profile:""})
        
        setExistingImage(user.profile)
    },[isUpdate])

    useEffect(()=>{
        if(userProfile.profile){
            setPreview(URL.createObjectURL(userProfile.profile))
            
        }
        else{
            setPreview("")
            console.log(setPreview)
        }
    },[userProfile.profile])

    const handleProfileUpdate = async()=>{
        const {username,email,password,github,linkedin,profile} = userProfile

        if(!github || !linkedin){
            toast.error('Please Fill the form Completely')
        }
        else{
            const reqBody = new FormData()
            reqBody.append("username",username)
            reqBody.append("email",email)
            reqBody.append("password",password)
            reqBody.append("github",github)
            reqBody.append("linkedin",linkedin)
            reqBody.append("profile",profile)

        

        const token = sessionStorage.getItem("token")

        if(preview){
            const reqHeader = {
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }
            const result = await editProfileAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
                toast.success('Profile Updated Successfully')
                sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                setIsUpdate(true)
            }
            else{
                console.log(result.response.data);
            }
        }
        else{
            const reqHeader = {
                "Content-Type":"multipart/form-data",
                "Authorization":`Bearer ${token}`
            }
            const result = await editProfileAPI(reqBody,reqHeader)
            console.log(result);
            if(result.status===200){
                toast.success('Profile Updated Successfully')
                sessionStorage.setItem("existingUser",JSON.stringify(result.data))
                setIsUpdate(true)
            }
            else{
                console.log(result.response.data);
            }
        }
        }
    }

  return (
    <>
        <div className='card shadow p-4 mb-5'>
            <div className='d-flex justify-content-between'>
                
                <h3 className='me-2'>Profile</h3>
                <button className='btn btn-outline-info' onClick={() => setOpen(!open)}><i class="fa-solid fa-angle-down"></i></button>
            </div>

           


            <Collapse in={open}>
                <div className="justify-content-center mt-5 ">
                    <label htmlFor="profile">
                        <input id='profile' type="file" style={{display:"none"}} onChange={(e)=> setUserProfile({...userProfile,profile:e.target.files[0]})}/>
                        {existingImage===""?
                        <img src={preview?preview:"https://cdn-icons-png.flaticon.com/512/3135/3135715.png"} className='w-100 rounded-circle' alt="no image" />:  <img src={preview?preview:`${BASE_URL}/uploads/${existingImage}`} className='w-100 rounded-circle' alt="no image" />}
                    </label>
                    <TextField  id="outlined-basic" label="GitHub" variant="outlined" className='w-100 mb-3 mt-3' value={userProfile.github} onChange={(e)=>setUserProfile({...userProfile,github:e.target.value})}/>

                    <TextField  id="outlined-basic" label="Linkedin" variant="outlined" className='w-100 ' value={userProfile.linkedin} onChange={(e)=>setUserProfile({...userProfile,linkedin:e.target.value})}/>

                    <div className='mt-3'>
                        <button className='btn btn-outline-success w-100' onClick={handleProfileUpdate} disabled={!formChanged}>Update</button>
                    </div>
                </div>
            </Collapse>
        </div>
    
    
    
    </>
  )
}

export default Profile