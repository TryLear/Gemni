import React, { useContext } from 'react'
import './Main.css'
import { assets } from '../../assest/assets'
import { Context } from '../../context/Context'

function Main() {
    const {onSet,recent,showResult,loading,resultData,setInput,input}=useContext(Context)
  return (
    <div className='main'>
        <div className="nav">
            <p>Gemini</p>
            <img src={assets.user_icon} alt="" />
        </div>
        <div className="main-container">
            {!showResult
            ?<>
             <div className="greet">
                <p><span>Hello,Ahmad</span></p>
                <p>How Can I Help You Today?</p>
            </div>
        
        <div className="cards">
            <div className="card">
                <p>Suggest beautiful places to see on a upcoming road trip</p>
                <img src={assets.compass_icon} alt="" />
            </div>
            <div className="card">
                <p>Breifly sumarize this concept: urban planning</p>
                <img src={assets.bulb_icon} alt="" />
            </div>
            <div className="card">
                <p>Brainstorm team bonding activitys for our work retreat</p>
                <img src={assets.message_icon} alt="" />
            </div>
            <div className="card">
                <p>Improve the readability of this following code</p>
                <img src={assets.code_icon} alt="" />
            </div>
        </div>
            </>:<div className='result'>
                <div className="result-title">
                    <img src={assets.user_icon} alt="" />
                    <p>{recent}</p>
                </div>
                <div className="result-data">
                    <img src={assets.gemini_icon} alt="" />
                    {loading
                    ?<div className="loader">
                        <hr />
                        <hr />
                        <hr />
                    </div>
                    :<p dangerouslySetInnerHTML={{__html:resultData}}></p>
                    }
                    
                </div>
            </div>
            }
           
        <div className="main-bottom">
            <div className="search-box">
                <input onChange={(e)=>{setInput(e.target.value)}} value={input} type="text" placeholder='Enter a prompt here' />
                <div>
                    <img src={assets.gallery_icon} alt="" />
                    <img src={assets.mic_icon} alt="" />
                    <img onClick={()=>{onSet()}} src={assets.send_icon} alt="" />
                </div>
            </div>
            <p className="info">Gemini is a AI they use hand free you must try it</p>
        </div>
    </div>

</div>
  )
}

export default Main