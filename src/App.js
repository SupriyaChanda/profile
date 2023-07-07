import './App.css';
import { data } from './data';
import image from "./supriya.jpg"
import {FaGraduationCap} from "react-icons/fa"
import {SiResearchgate, SiGooglescholar} from "react-icons/si"
import {LiaCalendarAltSolid} from "react-icons/lia"
import {BsCalendar2Date} from "react-icons/bs"
import {IoMdClose} from "react-icons/io"
import {MdPersonOutline, MdContentCopy} from "react-icons/md"
import {RiDoubleQuotesR} from "react-icons/ri"
import {AiOutlineHome,AiOutlineLink,AiFillFacebook,AiFillTwitterSquare,AiOutlineLinkedin,AiFillGithub, AiOutlineMail, AiOutlineWhatsApp, AiOutlinePhone} from "react-icons/ai"
import Popup from 'reactjs-popup';
import copy from "copy-to-clipboard";

function App() {
  return (
    <div className="">
      <div className="start py-[2%] bg-gradient-to-r flex from-white to-yellow-500">
        <div className='w-1/2  flex justify-center items-center'>
          <div className='img-container rounded-full p-2 flex justify-center items-center w-1/2 border-white border-4'>
          <img src={image} className='  rounded-full'/>
          </div>
        </div>
        <div className='w-3/4 flex justify-center items-center'>
          <div>
            <h2 className='intro text-[120%] tracking-wider'>
              Heyy!
            </h2>
            <h1 className='name font-bold text-[300%] font-mono '> 
            I am Supriya Chanda,
            </h1>
          <h4 className='intro w-4/5 text-[140%] font-sans'>
             A Ph.D student in the Department of Computer Science and Engineering, IIT (BHU), Varanasi.
            </h4>
             
          </div>
        </div>
      </div>
      <div className='about  px-[4%] py-[2%] text-gray-600  shadow-md shadow-yellow-100'>
        <div className='px-[5%] text-[200%] font-mono text-yellow-700 font-bold headings'>About Me
        </div>
        <div className='main flex px-[1%]' >
        <div className='side-left w-3/4 text-[120%] px-[2%] my-[2%]'> 
        I am doing my research under the guidance of Dr. Sukomal Pal at the Information retrieval lab.
        <br/>
        <span className='font-bold text-yellow-700'>
        Area of Interest:-
        </span>
          Information Retrival, Natural Language Processing, Machine Learning and Cryptography
        <br/>
        <span className='font-bold text-yellow-700'>
        Research Description:-
        </span>
          Information retrieval for Indian languages with Code-Mixing
        <div className='icons flex mt-[2%] w-full justify-center space-x-[2%] text-yellow-700'>
          <div>
            <a href='https://scholar.google.com/citations?user=wB9WetAAAAAJ&hl=en' rel="noreferrer" target='_blank'>
            <SiGooglescholar className='hover:scale-150 scale-125 hover:animate-spin transition ease-in-out'/>
            </a>
          </div>
          <div>
            <a href='https://www.researchgate.net/profile/Supriya-Chanda' rel="noreferrer" target='_blank'>
            <SiResearchgate  className='hover:scale-150 scale-125 hover:animate-spin transition ease-in-out'/>
            </a>
          </div>
          <div>
            <a href='https://www.facebook.com/supriya.chanda.5' rel="noreferrer" target='_blank'>
            <AiFillFacebook  className='hover:scale-150 scale-125 hover:animate-spin transition ease-in-out'/>
            </a>
          </div>
          <div>
            <AiFillGithub  className='hover:scale-150 scale-125 hover:animate-spin transition ease-in-out'/>
          </div>
          <div>
            <a href='https://twitter.com/suplife24' rel="noreferrer" target='_blank'>
            <AiFillTwitterSquare  className='hover:scale-150 scale-125 hover:animate-spin transition ease-in-out'/>
            </a>
          </div>
          <div>
            <a href='https://www.linkedin.com/in/supriyachandacs' rel="noreferrer" target='_blank'>
            <AiOutlineLinkedin  className='hover:scale-150 scale-125 hover:animate-spin transition ease-in-out '/>
            </a>
          </div>
        </div>
        </div>
        <div className=''>
        <div className="side-right flex text-[120%] my-[2%] ">
          <div className="mr-[4%] flex justify-center items-center text-yellow-700">
            <FaGraduationCap/>
          </div>
          <div>
            Research Scholar
          </div>
        </div>
        <div className="side-right flex text-[120%] my-[2%]">
          <div className="mr-[4%] flex justify-center items-center text-yellow-700">
            <AiOutlineHome/>
          </div>
          <div>
          Kharagpur, West Bengal, India
          </div>
        </div>
        <div className="side-right flex text-[120%] my-[2%]">
          <div className="mr-[4%] flex justify-center items-center text-yellow-700">
            <AiOutlineMail/>
          </div>
          <div>
            supriyachanda.rs.cse18@itbhu.ac.in
          </div>
        </div>
        <div className="side-right flex text-[120%] my-[2%]">
          <div className="mr-[4%] flex justify-center items-center text-yellow-700">
            <AiOutlineMail/>
          </div>
          <div>
            suplife24@gmail.com
          </div>
        </div>
        <div className="side-right flex text-[120%] my-[2%]">
          <div className="mr-[4%] flex justify-center items-center text-yellow-700">
            <AiOutlineWhatsApp/>
          </div>
          <div>
            (+91) 948 820 5994
          </div>
        </div>
        <div className="side-right flex text-[120%] my-[2%]">
          <div className="mr-[4%] flex justify-center items-center text-yellow-700">
            <AiOutlinePhone/>
          </div>
          <div>
            (+91) 948 820 5994
          </div>
        </div>
        </div>
        </div>      
        </div>
        <div className='about px-[4%] py-[2%]   shadow-md shadow-yellow-100'>
          <div className='px-[5%] text-[200%] font-mono text-yellow-700 font-bold headings'>Education
          </div>
          <div className='flex w-[99%] my-[2%] flex-wrap '>
            <div className= ' container w-[45%] px-[2%] py-[1%] mx-[1%] my-[1%] shadow-black shadow-md'>
              <div className='font-bold text-orange-400 font-mono text-[110%] labels mb-[1%]'>INDIAN INSTITUTE OF TECHNOLOGY (BANARAS HINDU UNIVERSITY), VARANASI</div>
              <div className='flex space-x-4 text-yellow-600 font-bold'>
                <div className="flex items-center justify-center scale-125"><LiaCalendarAltSolid/></div>
                <div className='text-[105%] dates'>
                Jul 2018 - Current</div>
                </div>
              <div className='text-gray-600 mt-[1%] contents'>Ph.D</div>
            </div>
            <div className= ' container w-[45%] px-[2%] py-[1%] mx-[1%] my-[1%] shadow-black shadow-md'>
              <div className='font-bold text-orange-400 font-mono text-[110%] labels mb-[1%]'>UNIVERSITY OF HYDERABAD, HYDERABAD </div>
              <div className='flex space-x-4 text-yellow-600 font-bold'>
                <div className="flex items-center justify-center scale-125"><LiaCalendarAltSolid/>
                </div>
                <div className='text-[105%] dates'>
                2016 - 2018</div>
                </div>
              <div className='text-gray-600 mt-[1%] contents'>M.Tech. in Computer Science</div>
            </div>
            <div  className= ' container w-[45%] px-[2%] py-[1%] mx-[1%] my-[1%] shadow-black shadow-md'>
              <div className='font-bold text-orange-400 font-mono text-[110%] labels mb-[1%]'>PONDICHERRY UNIVERSITY, PONDICHERRY</div>
              <div className='flex space-x-4 text-yellow-600 font-bold'>
                <div className="flex items-center justify-center scale-125"><LiaCalendarAltSolid/>
                </div>
                <div className='text-[105%] dates'>
                2014 - 2016</div>
                </div>
              <div className='text-gray-600 mt-[1%] contents'>M.Sc. in Computer Science</div>
            </div>
            <div  className= ' container w-[45%] px-[2%] py-[1%] mx-[1%] my-[1%] shadow-black shadow-md'>
            <div  className='font-bold text-orange-400 font-mono  text-[110%] labels mb-[1%]'>MIDNAPORE COLLEGE, WEST BENGAL</div>
              <div className='flex space-x-4 text-yellow-600 font-bold'>
                <div className="flex items-center justify-center scale-125"><LiaCalendarAltSolid/>
                </div>
                <div className='text-[105%] dates'>
                2010 - 2014</div>
                </div>
              <div className='text-gray-600 mt-[1%] contents' >B.Sc. in Computer Science</div>
            </div>
          </div>
        </div>
        <div className='about px-[4%] py-[2%]   shadow-md shadow-yellow-100'>
          <div className='px-[5%] text-[200%] font-mono text-yellow-700 font-bold headings'>Achievements
          </div>
          <div  className= ' container w-[45%] px-[2%] py-[1%] mx-[1%] my-[2%] shadow-black shadow-md'>
              <div className='font-bold text-orange-400 font-mono text-[110%] labels mb-[1%]'>QUALIFIED GATE TWO TIMES</div>
              <div className='flex space-x-4 text-yellow-600 font-bold'>
                <div className="flex items-center justify-center scale-125"><LiaCalendarAltSolid/>
                </div>
                <div className='text-[105%] dates'>
                2016 and 2018</div>
                </div>
            </div>
        </div>
        <div className='about px-[4%] py-[2%]   shadow-md shadow-yellow-100'>
          <div className='px-[5%] text-[200%] font-mono text-yellow-700 font-bold headings'>Publications
          </div>
          <div  className=' px-[2%] py-[1%] mx-[1%] my-[2%] shadow-black shadow-md'>
              <div className='font-bold text-orange-400 font-mono text-[130%] labels mb-[1%]'>WORKSHOP PAPERS </div>
              <div>
              {
            data.map((item) => {
              return (
                <div key={item.id}  className={`publ-card rounded-2xl flex justify-start my-[2%] py-[1%]  tracking-wide   bg-yellow-50 `}>
                  <div className='px-[2%] '>
                    <div>
                      <div className='publ-desc text-[130%] font-sans my-[1%] font-bold text-black '>
                        {item.desc}
                      </div>
                      <div className='publ-name my-[1%] font-sans text-[110%]'>
                        {item.name}
                      </div>
                      <div className='flex publ-div  mt-[6px] items-center  space-x-1'>
                        <div className='publ-border flex justify-center items-center border-r-2 pr-[1%] border-[#666666]'>
                          <span className=''>
                            <MdPersonOutline className='mem-icon' size={"1.25rem"} />
                          </span>
                          <div className='publ-auth  text-[120%]'>
                            {item.authors}
                          </div>
                        </div>
                        <div className='publ-last flex space-x-3 items-center pl-[1%]'>
                          <div className='flex publ-year justify-start items-center  space-x-1 transition ease-in-out hover:scale-110'>
                            <div>
                              <BsCalendar2Date className='mem-icon' size={"1.25rem"} />
                            </div>
                            <div className='pl-[2%] publ-icons'>
                              {item.year}
                            </div>
                          </div>
                          {item.link &&
                            <a href={item.link} target='__blank' className='flex  space-x-1 publ-year justify-start items-center  transition ease-in-out hover:scale-110 '>
                              <div>
                                <AiOutlineLink className='mem-icon' size={"1.25rem"} />
                              </div>
                              <div className='pl-[2%] '>
                                Link
                              </div>
                            </a>
                          }
                          {item.bibtex &&
                            <div className=''>
                              <Popup className='pop' trigger={
                                <div className=' publ-year flex justify-center space-x-1 items-center transition ease-in-out hover:scale-110'>
                                  <div><RiDoubleQuotesR className='mem-icon' size={"1.25rem"} /> </div>
                                  <button className=''>Cite
                                  </button>
                                </div>
                              } modal nested>{
                                  close => (
                                    <div className='modal break-words' >
                                      <pre className='content my-[3%] mx-[3%] break-words'>
                                        {item.bibtex}
                                      </pre>
                                      <div className='flex w-full justify-evenly my-[1%] items-center '>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2 tracking-wider hover:scale-110 tranistion ease-in-out text-[#666666]'>
                                          <button className='    flex items-center justify-center w-full ' onClick={() => {
                                            copy(item.bibtex)
                                            alert("Copied to clipboard!")
                                          }}>
                                            <MdContentCopy className='mem-icon m-[2%]' size={'1.25rem'} />
                                          </button>
                                        </div>
                                        <div className='flex  items-center justify-center p-[1%] font-bold border-2 hover:scale-110 tranistion ease-in-out tracking-wider  text-[#666666]'>
                                          <button className=' flex items-center justify-center w-full ' onClick={() => close()}><IoMdClose className='mem-icon m-[2%]' size={'1.25rem'} /> </button>
                                        </div>
                                      </div>
                                    </div>
                                  )
                                }
                              </Popup>
                            </div>
                          }
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })
          }
              </div>
              
            </div>
        </div>
        <div className='py-[1%]  px-[2%] footer flex justify-center items-center bg-yellow-200'>
          <div className='text-center w-[80%] font-bold font-mono'>
          <a href='https://www.iitbhu.ac.in/' target='_blank' rel="noreferrer">

          © 2023-24 | Indian Institute of Technology (Banaras Hindu University), Varanasi. All Rights Reserved.
          </a>
          <br/>
          <a href='https://www.iitbhu.ac.in/dept/cse' target='_blank' rel="noreferrer">
          Department of Computer Science and Engineering IIT-BHU
          </a>
          </div>
        </div>
    </div>
  );
}

export default App;
