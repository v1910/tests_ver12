//HeaderTestsList.js------------------

import React from 'react';

import { useSelector, useDispatch } from 'react-redux';

import  "./HeaderTestsList.css";

//import  { ShowCurrentTest } from "../showCurrentTest/ShowCurrentTest.js";

let list_tests_wrapper = null;

let all_input_sections = null;

export function HeaderTestsList() {

console.log('HeaderTestsList -------------');


    let dispatch = useDispatch();  

    const tests = useSelector((store) => store.tests);

    const currentTests = useSelector((store) => store.currentTest);

    list_tests_wrapper = useSelector((store) => store.list_tests_wrapper); 

    all_input_sections = useSelector((store) => store.all_input_sections); 

    
console.log('1 HeaderTestsList:  all_input_sections=',all_input_sections);
//    console.log('HeaderTestsList count_questions_test=',count_questions_test);
    
    let work2 = [];
    let work3 = '';

//    work_state_test[0] = false;

//    const passNumberTest = e => dispatch({type: 'SET_TESTS', currentTest: e.currentTarget.value});


    for(let kk = 1; kk <= tests.length; kk++){
            work3 = 'TEST' + kk;
            work2[kk-1] =  (<div id={work3} class="menu_test" 
                                               fontSize="11px" 
                                               key = {kk}
                                               value = {kk}
                                               onClick =    {() => dispatch({  type: 'HeaderTestsList', 
                                                                                payload: {
                                                                                    currentTest:        kk-1, 
                                                                                    showHideTest:       true,
                                                                                    list_tests_wrapper: 'hidden',
                                                                                    countDownDate:      new Date().getTime(), // start time for the chosing test
                                                                                    countDownDate_qst:  new Date().getTime(), // start time for the chose question
                                                                                    state_test:         Array(tests[currentTests].length).fill(true),
                                                                                    state_green_red:    Array(tests[currentTests].length).fill([-1,-1]),
                                                                                    firstTimer:         null,
                                                                                    showHideTest:       'showHideTest',
                                                                                    showHideWords:      'showHideTest',
                                                                                    showHideListen:     'showHideTest',
                                                                                    showHidePrases:     'showHideTest',
                                                                                    showHideJokes:      'showHideTest',
                                                                                    showHideStatistics: 'showHideTest',
                                                                                    prases:             null,
                                                                                    phrases_wrapper_visibility: {display: 'none'},
                                                                                    all_input_sections:  
                                                                                        {
                                                                                            _id: 0,
                                                                                            all_input_tests: all_input_sections.all_input_tests + 1,
                                                                                            all_input_words: all_input_sections.all_input_words,
                                                                                            all_input_listen: all_input_sections.all_input_listen,
                                                                                            all_input_phrases: all_input_sections.all_input_phrases,
                                                                                            all_input_jokes: all_input_sections.all_input_jokes,
                                                                                            all_input_statistics: all_input_sections.all_input_statistics
                                                                                        }
                                                                                }
                                                                            })
                                                            }
                            >
                                {work3}
                            </div>)
    }
    if(list_tests_wrapper === 'visible') return work2
    else return null;

}// end of HeaderTestsList------------



/*
                                           


                work2[kk-1] =  <div id={work3} class="menu_test" font-size="11px" onClick="ShowTest(1)">{work3}</div>

import { useSelector } from 'react-redux';

import { useDispatch } from "react-redux";

import { insertAfter } from "insertAfter.js";

import { ShowTest } from "./ShowTest.js";

import { CheckBrowser } from "CheckBrowser.js";


export function ListTestsWrapper() {
console.log('ListTestsWrapper------------------------')  



    const dispatch = useDispatch();   

   
    

    console.log('ListTestsWrapper:  count_questions_test=',count_questions_test);


    let  arr_state_test = Array(count_questions_test);

    for(let i=0; i<count_questions_test; i++) 
    {arr_state_test[i] = true;}

    arr_state_test[0] = false;

    
    let tests = useSelector((store) => store.tests);


        return  (
        <div id="list_tests_wrapper" style="visibility: visible;"> 
            {work2}
        </div>
    )
                work2[kk-1] =  <div id="TEST1" class="menu_test" font-size="11px" onclick="ShowTest(1)">{work3}</div>
*/