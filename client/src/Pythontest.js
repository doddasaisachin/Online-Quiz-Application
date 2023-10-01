import React, { useState } from 'react';
import Python from './Python';
import './App.css'
// import { NULL } from 'mysql/lib/protocol/constants/types';
// import { faL } from '@fortawesome/free-solid-svg-icons';
const Pythontest = () => {
    const [answer1,setAnswer1] = useState()
    const [result1,setResult1] = useState()
    const [output,setOutput] = useState()

    const [answer2,setAnswer2] = useState()
    const [result2,setResult2] = useState()
    const [output2,setOutput2] = useState()

    const [answer3,setAnswer3] = useState()
    const [result3,setResult3] = useState()
    const [output3,setOutput3] = useState()

    const [answer4,setAnswer4] = useState()
    const [result4,setResult4] = useState()
    const [output4,setOutput4] = useState()

    const [answer5,setAnswer5] = useState()
    const [result5,setResult5] = useState()
    const [output5,setOutput5] = useState()

    const [answer6,setAnswer6] = useState()
    const [result6,setResult6] = useState()
    const [output6,setOutput6] = useState()

    const changevalue = (e) => {
        let value = e.target.value;
        console.log(value)
        setAnswer1(value)
    }

    const changevalue1 = (e) => {
        let value = e.target.value;
        setAnswer2(value)
    }

    const changevalue2 = (e) => {
        let value = e.target.value;
        setAnswer3(value)
    }

    const changevalue3 = (e) => {
        let value = e.target.value;
setAnswer4(value)
    }

    const changevalue4 = (e) => {
        let value = e.target.value;
        setAnswer5(value)
    }

    const changevalue5 = (e) => {
        let value = e.target.value;
        setAnswer6(value)
    }
    const submit1 = () => {
        let answer = Python[0].ans
        if(answer1 === answer){
           setResult1("True")
        //    setAnswer1("")
           setOutput(true)
        }else{
            setResult1("False")
            setAnswer1("")
            setOutput(false)
        }
    }

    const submit2 = () => {
        let answer1 = Python[1].ans;
        if(answer2 === answer1 ){
            setResult2("True")
            setOutput2(true)
        }else{
            setResult2("False")
            setOutput2(false)
        }
    }

    const submit3 = () => {
        let answer2 =Python[2].ans;
        if(answer3 === answer2){
            setResult3("True")
            setOutput3(true)
        }else{ 
            setResult3("False")
            setOutput3(false)
        }
    }

    const submit4 = () => {
        let answer3 =Python[3].ans;
        if(answer4 === answer3){
            setResult4("True")
            setOutput4(true)
        }else{
            setResult4("False")
            setOutput4(false)
        }
    }

    const submit5 = () => {
        let answer4 =Python[4].ans;
        if(answer5 === answer4){
            setResult5("True")
            setOutput5(true)
        }else{
            setResult5("False")
            setOutput5(false)
        }
    }

    const submit6 = () => {
        let answer5 =Python[5].ans;
        if(answer6 === answer5){
            setResult6("True")
            setOutput6(true)
        }else{
            setResult6("False")
            setOutput6(false)
        }
    }
    return(
        <>
        <div className='container'>
        <div className='row'>
            <div className='col-lg-12 col-md-12  col-12 d-flex justify-content-center'>
                <h4>Attempt Test</h4>
            </div>
            <hr className='w-25 mx-auto'/>
        </div>

        {/* this is the heading row and column */}
        <div className='row'>
            <div className='col-lg-12 col-md-12  col-12 d-flex justify-content-center'>
                <p>Note : This is digitalized test that you can only attempt once,</p>
                <p>This test content belongs to the Data Structures</p>
            </div>
        </div>

          <div className='box w-100'>
            <h6 className='my-3'>Question : {Python[0].question}</h6>
            <input type='radio' onChange={changevalue} name='answer' value={Python[0].a} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[0].a}</label>
            <br/>
            <input type='radio' onChange={changevalue} name='answer' value={Python[0].b} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[0].b}</label>
            <br/>
            <input type='radio' onChange={changevalue}  name='answer' let value={Python[0].c} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[0].c}</label>
            <br/>
            <input type='radio' onChange={changevalue} name='answer' value={Python[0].d} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[0].d}</label>
            <br/>
            <button type='button'className='submitbtn mt-3'onClick={submit1}>Submit</button>
            <h6 className='mt-3 mb-3'>Result : {result1} </h6>
           {  output ? <p>Explanation=correct answer is {Python[0].ans}</p> : null}
          </div>

          <div className='box w-100'>
            <h6 className='my-3'>Question : {Python[1].question}</h6>
            <input type='radio' onChange={changevalue1} name='answer' value={Python[1].a} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[1].a}</label>
            <br/>
            <input type='radio' onChange={changevalue1} name='answer' value={Python[1].b} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[1].b}</label>
            <br/>
            <input type='radio' onChange={changevalue1}  name='answer' let value={Python[1].c} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[1].c}</label>
            <br/>
            <input type='radio' onChange={changevalue1} name='answer' value={Python[1].d} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[1].d}</label>
            <br/>
            <button type='button'className='submitbtn mt-3'onClick={submit2}>Submit</button>
            <h6 className='mt-3 mb-3'>Result : {result2} </h6>
           {  output2 ? <p>Explanation=correct answer is {Python[1].ans}</p> : null}
          </div>
          <div className='box w-100'>
            <h6 className='my-3'>Question : {Python[2].question}</h6>
            <input type='radio' onChange={changevalue2} name='answer' value={Python[2].a} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[2].a}</label>
            <br/>
            <input type='radio' onChange={changevalue2} name='answer' value={Python[2].b} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[2].b}</label>
            <br/>
            <input type='radio' onChange={changevalue2}  name='answer' let value={Python[2].c} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[2].c}</label>
            <br/>
            <input type='radio' onChange={changevalue2} name='answer' value={Python[2].d} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[2].d}</label>
            <br/>
            <button type='button'className='submitbtn mt-3'onClick={submit3}>Submit</button>
            <h6 className='mt-3 mb-3'>Result : {result3} </h6>
           {  output3 ? <p>Explanation=correct answer is {Python[2].ans}</p> : null}
          </div>
          <div className='box w-100'>
            <h6 className='my-3'>Question : {Python[3].question}</h6>
            <input type='radio' onChange={changevalue3} name='answer' value={Python[3].a} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[3].a}</label>
            <br/>
            <input type='radio' onChange={changevalue3} name='answer' value={Python[3].b} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[3].b}</label>
            <br/>
            <input type='radio' onChange={changevalue3}  name='answer' let value={Python[3].c} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[3].c}</label>
            <br/>
            <input type='radio' onChange={changevalue3} name='answer' value={Python[3].d} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[3].d}</label>
            <br/>
            <button type='button'className='submitbtn mt-3'onClick={submit4}>Submit</button>
            <h6 className='mt-3 mb-3'>Result : {result4} </h6>
           {  output4 ? <p>Explanation=correct answer is {Python[3].ans}</p> : null}
          </div>

          <div className='box w-100'>
            <h6 className='my-3'>Question : {Python[4].question}</h6>
            <input type='radio' onChange={changevalue4} name='answer' value={Python[4].a} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[4].a}</label>
            <br/>
            <input type='radio' onChange={changevalue4} name='answer' value={Python[4].b} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[4].b}</label>
            <br/>
            <input type='radio' onChange={changevalue4}  name='answer' let value={Python[4].c} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[4].c}</label>
            <br/>
            <input type='radio' onChange={changevalue4} name='answer' value={Python[4].d} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[4].d}</label>
            <br/>
            <button type='button'className='submitbtn mt-3'onClick={submit5}>Submit</button>
            <h6 className='mt-3 mb-3'>Result : {result5} </h6>
           {  output5 ? <p>Explanation=correct answer is {Python[4].ans}</p> : null}
          </div>

          <div className='box w-100'>
            <h6 className='my-3'>Question : {Python[5].question}</h6>
            <input type='radio' onChange={changevalue5} name='answer' value={Python[5].a} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[5].a}</label>
            <br/>
            <input type='radio' onChange={changevalue5} name='answer' value={Python[5].b} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[5].b}</label>
            <br/>
            <input type='radio' onChange={changevalue5}  name='answer' let value={Python[5].c} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[5].c}</label>
            <br/>
            <input type='radio' onChange={changevalue5} name='answer' value={Python[5].d} className='answeroption'></input>
            <label htmlFor='options'className='answerbutton'>{Python[5].d}</label>
            <br/>
            <button type='button'className='submitbtn mt-3'onClick={submit6}>Submit</button>
            <h6 className='mt-3 mb-3'>Result : {result6} </h6>
           {  output6 ? <p>Explanation=correct answer is {Python[5].ans}</p> : null}
          </div>
          </div>

          {/* this is for second question */}

          
          {/* </div> */}
        </>
    )
}
export default Pythontest;

