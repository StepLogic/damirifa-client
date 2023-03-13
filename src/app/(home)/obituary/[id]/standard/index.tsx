/* The above code is a React component that renders a standard obituary page. */
// /**
//  * Project: damirifa
//  * File: index
//  * Created by Pennycodes on 4/20/2022.
//  * Copyright damirifa
//  */
// import type { NextPage } from 'next'
// import 'tippy.js/dist/tippy.css'
// import 'tippy.js/themes/light.css'
// import 'tippy.js/dist/backdrop.css'
// import 'tippy.js/animations/shift-away.css'
// // import s from '@assets/sass/standard.module.scss'
// import { BsInfoCircle, BsWhatsapp, BsPhone, BsEnvelope } from 'react-icons/bs'
// import tippy, { animateFill } from 'tippy.js'
// import { Splide, SplideSlide } from '@splidejs/react-splide'
// import { Button } from '@components/ui'
// import React, { useEffect, useRef } from 'react'
// import 'bootstrap/dist/css/bootstrap.min.css'
// import ReadMoreText from 'read-more-less-react'
// import 'read-more-less-react/dist/index.css'
// import { CONDOLENCES, RELATIONS, TEXT, THANKS } from '@lib/Data'
// import Dropzone from 'react-dropzone'
// import { Clock } from '@assets/js/Clock'
// import { MetaTags } from '@lib/Utils'
// import cn from 'classnames'
// const StandardDesign: NextPage = () => {
//   const loadClock = useRef<boolean>(true)
//   const toAbsoluteUrl = (pathname: string) => '/' + pathname
//   useEffect(() => {
//     tippy('.tip', {
//       duration: 400,
//       inertia: true,
//       allowHTML: true,
//       animateFill: true,
//       plugins: [animateFill],
//       arrow: false,
//       delay: [100, 200],
//       placement: 'bottom',
//       theme: 'light',
//       interactive: true,
//     })
//     if (loadClock.current) {
//       loadClock.current = false
//       const deadline = new Date(Date.now() + 12 * 24 * 60 * 60 * 1000)
//       Clock.bootstrap(
//         document.getElementById('clock-holder'),
//         deadline.toString(),
//       )
//     }
//   }, [loadClock])
//   return (
//     <>
//       <MetaTags title={'Standard Obituary'} />
//       <div className={cn('page-section')}>
//         <div className="bg-black">
//           <div className="container">
//             <div className="row">
//               <div className="col-md-6 ">
//                 <div className="row position-relative">
//                   <div className="p-overlay" />
//                   <div
//                     className="fes3-img equal-height"
//                     style={{
//                       backgroundImage: `url(${toAbsoluteUrl(
//                         'assets/img/jerry.jpg',
//                       )})`,
//                     }}
//                   />
//                 </div>
//               </div>
//               <div className="col-md-6 left-50 equal-height">
//                 <div className="fes2-layout-text-cont">
//                   <div className="title-fs-45">
//                     <span className="bold text-white">
//                       Flt. Lt. Jerry John Rawlings
//                     </span>
//                     <br />
//                     <span className="fs-5 text-white">
//                       (1947-2020), Jay Jay
//                     </span>
//                   </div>
//                   <div className="fes2-text-cont">
//                     <div className={'bubble'}>
//                       <blockquote>
//                         Don&apos;t let evil in the world kill the love in your
//                         heart! ll the love in your heart! ll the love in your
//                         heart! Continue to LOVE one another!{' '}
//                       </blockquote>
//                     </div>
//                   </div>
//                   <Button
//                     className="mt-3 mt-lg-5 btn-lg border-20"
//                     color={'var(--damirifa-red)'}
//                   >
//                     <span className={'text-white'}>Share</span>
//                   </Button>
//                 </div>
//               </div>
//             </div>
//           </div>
//           <nav aria-label="breadcrumb" className="bg-black text-white mt-3">
//             <ol className="breadcrumb justify-content-center text-uppercase ls-3">
//               <li className="breadcrumb-item ">
//                 <a href="#" className="text-white text-decoration-none">
//                   Home
//                 </a>
//               </li>
//               <li className="breadcrumb-item">
//                 <a href="#" className="text-white text-decoration-none">
//                   Obituary
//                 </a>
//               </li>
//               <li className="breadcrumb-item active" aria-current="page">
//                 Jerry
//               </li>
//             </ol>
//           </nav>
//         </div>
//         <div className=" pt-3 floralwhite z-0">
//           <div className={'container'}>
//             <div className="row justify-content-center text-center">
//               <div className="col-md-3 col-sm-12">
//                 <div className="side-image">
//                   <div className=" p-3">
//                     <div className="live-overlay" />
//                     <h1 className="fs-6 fw-bold text-white d-flex justify-content-between">
//                       Event Name
//                       <span
//                         data-tippy-content="<p>Hello I am a good description of this event</p>"
//                         className="tip text-white"
//                       >
//                         <BsInfoCircle />
//                       </span>
//                     </h1>
//                     <div id={'clock-holder'} />
//                     <a href="#!" className="fs-8 mb-1 text-white fw-bold ">
//                       Add to Calendar
//                     </a>
//                     <p className="is-live-date fs-7">June 25 2018 @ 6:30 PM</p>
//                     <a
//                       href="#"
//                       className="btn btn-sm  btn-outline-light rounded-pill  p-2 mt-1 mb-2  "
//                     >
//                       VIEW
//                     </a>
//                   </div>
//                 </div>
//               </div>
//               <div className={'col-md-15 col-6'}>
//                 <div className="side-image">
//                   <img
//                     src={toAbsoluteUrl('assets/img/feature-4.jpg')}
//                     className="side"
//                     alt=""
//                   />
//                   <div className="side-overlay" />
//                   <div className="is-overlay text-white d-flex flex-column justify-content-center">
//                     <div className={'svg-container'}>
//                       <img
//                         className={'svg-icon mb-3'}
//                         alt={''}
//                         src={toAbsoluteUrl('svgs/album.svg')}
//                       />
//                       <h4 className="card-title">ALBUM</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className={'col-md-15 col-6'}>
//                 <div className="side-image">
//                   <img
//                     src={toAbsoluteUrl('assets/img/video.jpg')}
//                     className="side"
//                     alt=""
//                   />
//                   <div className="side-overlay" />
//                   <div className="is-overlay text-white d-flex flex-column justify-content-center">
//                     <div className={'svg-container'}>
//                       <img
//                         className={'svg-icon mb-3'}
//                         alt={''}
//                         src={toAbsoluteUrl('svgs/videos.svg')}
//                       />
//                       <h4 className="card-title">VIDEOS</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className={'col-md-15 col-6'}>
//                 <div className="side-image">
//                   <img
//                     src={toAbsoluteUrl('assets/img/audio-tribute.jpg')}
//                     className="side"
//                     alt=""
//                   />
//                   <div className="side-overlay" />
//                   <div className="is-overlay text-white d-flex flex-column justify-content-center">
//                     <div className={'svg-container'}>
//                       <img
//                         className={'svg-icon mb-3'}
//                         alt={''}
//                         src={toAbsoluteUrl('svgs/tribute.svg')}
//                       />
//                       <h4 className="card-title">AUDIO TRIBUTE</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//               <div className={'col-md-15 col-6'}>
//                 <div className="side-image">
//                   <img
//                     src={toAbsoluteUrl('assets/img/funeral-program.jpg')}
//                     className="side"
//                     alt=""
//                   />
//                   <div className="side-overlay" />
//                   <div className="is-overlay text-white d-flex flex-column justify-content-center">
//                     <div className={'svg-container'}>
//                       <img
//                         className={'svg-icon mb-3'}
//                         alt={''}
//                         src={toAbsoluteUrl('svgs/program.svg')}
//                       />
//                       <h4 className="card-title">PROGRAM</h4>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//         <div className="row">
//           <div className="col-12">
//             <div
//               className={'position-relative'}
//               style={{
//                 background: `url(${toAbsoluteUrl(
//                   'assets/img/clouds.jpg',
//                 )}) center center no-repeat`,
//                 backgroundSize: 'cover',
//               }}
//             >
//               <div className="text-white d-flex align-items-center flex-column">
//                 <Button
//                   className="mt-3 mt-lg-5 btn-lg border-20 alt"
//                   color={'var(--damirifa-red)'}
//                 >
//                   <span className={'text-white'}>
//                     {' '}
//                     <img
//                       className={' w-30px'}
//                       src={toAbsoluteUrl('assets/img/gong.svg')}
//                       alt="gong"
//                     />{' '}
//                     Audio Announcement
//                   </span>
//                 </Button>
//                 <div className={'container mt-5'}>
//                   <div className={'black-container'}>
//                     <div className="black-image">
//                       <img
//                         src={toAbsoluteUrl('assets/img/candles.jpg')}
//                         alt=""
//                       />
//                     </div>
//                     <div className="card  bg-transparent border-0 shadow-sm">
//                       <div className="card-body text-center p-lg-3 p-0">
//                         <div className="squeeze  mt-lg-5">
//                           <h1 className="h1 pt-lg-5 py-3 ob-title">
//                             Call to Glory
//                           </h1>
//                           <p className="">
//                             People normally use Call to glory to mean as way of
//                             saying Goodbye to their loved ones who have passed
//                             away. People do make posters with this writing on
//                             it. Well Call To Glory is not a wrong English
//                             phrase. But the context which is being used here is
//                             wrong. In the incident of making or bidding a
//                             farewell to a deceased love one, the correct phrase
//                             to use is Called To Glory. That means, it should be
//                             stated in it is past tense. The death incident had
//                             occurred already and families wish their beloved is
//                             with the Creator by now. This means, it should be
//                             quoted in its past tense. Saying Call To Glory means
//                             a lot of things which is different to the deceased
//                             who have gone to glory. People also use Obituary,
//                             Gone Too Soon, etc. The Gone Too Soon was stated
//                             here correctly and not Go too soon. This concludes
//                             our article for today as, it is right to say Called
//                             To Glory, and not call to glory.
//                           </p>
//                           <h4 className="fw-bold h4 my-4 centaur">
//                             Announce with deep sorrow the sudden death of their
//                             beloved
//                           </h4>
//                           <div className="age-text my-3">73 years</div>
//                           <div className="announce-date fw-bold h4 my-4">
//                             {' '}
//                             JUNE 22, 1947 - NOVEMBER 12, 2020
//                           </div>
//                           <div className="announce-born h5"> Born in Accra</div>
//                           <div className="announce-born my-3">
//                             <ReadMoreText
//                               lines={3}
//                               text={TEXT}
//                               readMoreText={'Read More'}
//                               readLessText={'Read Less'}
//                             />
//                           </div>
//                           <div className="row text-start my-5">
//                             <div className="col-md-3 col-6">
//                               <h5 className={'card-title fw-bolder'}>
//                                 {' '}
//                                 14th May 2022
//                               </h5>
//                               <div className="d-flex flex-column">
//                                 <p className="text-uppercase">
//                                   Date of funeral{' '}
//                                 </p>
//                                 <ul
//                                   className={'list-unstyled'}
//                                   style={{ listStyle: 'disc' }}
//                                 >
//                                   <li className="fw-light"> 12PM - 1PM</li>
//                                   <li className="fw-light"> Woodland Hills</li>
//                                 </ul>
import React from "react";

//                                 <p className="text-uppercase">Viewing </p>
//                                 <ul
//                                   className={'list-unstyled'}
//                                   style={{ listStyle: 'disc' }}
//                                 >
//                                   <li className="fw-light"> 12PM - 1PM</li>
//                                   <li className="fw-light"> Woodland Hills</li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="col-md-3 col-6">
//                               <h5 className={'card-title fw-bolder'}>
//                                 {' '}
//                                 16th May 2022
//                               </h5>
//                               <div className="d-flex flex-column">
//                                 <p className="text-uppercase">Processing </p>
//                                 <ul
//                                   className={'list-unstyled'}
//                                   style={{ listStyle: 'disc' }}
//                                 >
//                                   <li className="fw-light"> 12PM - 1PM</li>
//                                   <li className="fw-light"> Woodland Hills</li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="col-md-3 col-6">
//                               <h5 className={'card-title fw-bolder'}>
//                                 {' '}
//                                 14th May 2022
//                               </h5>
//                               <div className="d-flex flex-column">
//                                 <p className="text-uppercase">Burial </p>
//                                 <ul
//                                   className={'list-unstyled'}
//                                   style={{ listStyle: 'disc' }}
//                                 >
//                                   <li className="fw-light"> 12PM - 1PM</li>
//                                   <li className="fw-light"> Woodland Hills</li>
//                                 </ul>
//                               </div>
//                             </div>
//                             <div className="col-md-3 col-6">
//                               <h5 className={'card-title fw-bolder'}>
//                                 {' '}
//                                 14th May 2022
//                               </h5>
//                               <div className="d-flex flex-column">
//                                 <p className="text-uppercase">
//                                   Date of funeral{' '}
//                                 </p>
//                                 <ul
//                                   className={'list-unstyled'}
//                                   style={{ listStyle: 'disc' }}
//                                 >
//                                   <li className="fw-light"> 12PM - 1PM</li>
//                                   <li className="fw-light"> Woodland Hills</li>
//                                 </ul>
//                               </div>
//                             </div>
//                           </div>
//                           <div className="row text-start my-5">
//                             <div className="col-md-4 col-6">
//                               <h5 className={'card-title fw-bolder'}>
//                                 {' '}
//                                 FATHER
//                               </h5>
//                               <p className="fw-light"> Buhle Zuberi Arendse</p>
//                             </div>
//                             <div className="col-md-4 col-6">
//                               <h5 className={'card-title fw-bolder'}>
//                                 {' '}
//                                 MOTHER
//                               </h5>
//                               <p className="fw-light">
//                                 {' '}
//                                 Kadiatou Chidiebube Kayode
//                               </p>
//                             </div>
//                             {Object.keys(RELATIONS).map((key, index) => (
//                               <div
//                                 className="col-md-4 col-12"
//                                 key={index.toString()}
//                               >
//                                 <h5 className={'card-title fw-bolder'}>
//                                   {key}
//                                 </h5>
//                                 <ul className={'list-unstyled'}>
//                                   {/*@ts-ignore*/}
//                                   {RELATIONS[key].map((value, index) => (
//                                     <li
//                                       key={index.toString()}
//                                       className="fw-light"
//                                     >
//                                       {value}
//                                     </li>
//                                   ))}
//                                 </ul>
//                               </div>
//                             ))}
//                           </div>
//                           <div className="row">
//                             <div className="col-md-4 offset-md-2 col-6">
//                               <p className="light-font mb-0">Contact person</p>
//                               <h3 className="text-bolder white-text mt-0">
//                                 Karla D. Si
//                               </h3>
//                             </div>
//                             <div className="col-md-4 col-6">
//                               <div className="d-inline-flex justify-content-start ">
//                                 <span className="border-0 pm-social-icon me-1">
//                                   <BsWhatsapp />
//                                 </span>
//                                 <span className="border-0 pm-social-icon me-1">
//                                   <BsPhone />
//                                 </span>
//                                 <span className="border-0 pm-social-icon me-1">
//                                   <BsEnvelope />
//                                 </span>
//                               </div>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className={'row'}>
//                     <div className={'col-md-12'}>
//                       <div
//                         className={'position-relative my-4'}
//                         style={{
//                           background: `url(${toAbsoluteUrl(
//                             'assets/img/jerry.jpg',
//                           )}) center center no-repeat`,
//                           backgroundSize: 'cover',
//                           borderRadius: 20,
//                         }}
//                       >
//                         <div className="p-overlay" />
//                         <div className="container position-relative z-1">
//                           <div className="p-lg-5 p-2">
//                             <h1 className="h1 fw-bolder">
//                               Flt. Lt. Jerry John Rawlings
//                             </h1>
//                             <p className="fw-bold ">(1916 - 2018), JJ</p>

//                             <div className="mt-2">
//                               <blockquote className="blockquote text-start">
//                                 <p className="has-text-white mb-0 light-font d-quote">
//                                   The man who keeps busy helping the man below
//                                   him will not have time to envy the man above
//                                   him.
//                                 </p>
//                                 <footer className="blockquote-footer mt-2 text-white fw-bold">
//                                   Viola Campbell
//                                 </footer>
//                               </blockquote>
//                             </div>
//                           </div>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className={'row mt-4'}>
//                     <div className={'col-md-6'}>
//                       <h5 className={'card-title fw-bolder'}>Condolences</h5>
//                       <div className={'tribute-box'}>
//                         {CONDOLENCES.map(
//                           ({ hasImage, name, text, relation, days }, index) => (
//                             <div key={index.toString()} className={'card my-3'}>
//                               <div className="p-3 pb-1">
//                                 <div className="d-flex justify-content-between">
//                                   <div
//                                     className={'d-flex justify-content-start'}
//                                   >
//                                     <img
//                                       src={toAbsoluteUrl('svgs/quote.svg')}
//                                       className={'h-50px'}
//                                       alt={''}
//                                     />
//                                     <div className="d-flex flex-column">
//                                       <h5
//                                         className={
//                                           'card-title fw-bolder text-dark'
//                                         }
//                                       >
//                                         {' '}
//                                         {name}
//                                       </h5>
//                                       <p className={'fw-bolder pm-color'}>
//                                         {' '}
//                                         {relation}
//                                       </p>
//                                     </div>
//                                   </div>
//                                   <span className={'text-dark fw-light'}>
//                                     {days}
//                                   </span>
//                                 </div>
//                               </div>
//                               <div className={'card-body pt-0 d-flex'}>
//                                 <p className={'text-dark'}>{text}</p>
//                                 {hasImage && (
//                                   <img
//                                     src={toAbsoluteUrl(
//                                       'assets/img/feature-4.jpg',
//                                     )}
//                                     className="tribute-img"
//                                     alt=""
//                                   />
//                                 )}
//                               </div>
//                               <div
//                                 className={
//                                   'card-footer d-flex justify-content-end'
//                                 }
//                               >
//                                 <button className={'rm-more-button'}>
//                                   Read More
//                                 </button>
//                               </div>
//                             </div>
//                           ),
//                         )}
//                       </div>
//                       <div className="fadedScroller_fade" />
//                     </div>
//                     <div className={'col-md-6'}>
//                       <div className="card shadow-lg bg-dark border-5 border-dark my-3 p-lg-3 p-2">
//                         <h5 className={'card-title fw-bolder'}>
//                           {' '}
//                           Book of Condolence
//                         </h5>
//                         <div className={'card-body'}>
//                           <form>
//                             <div className="form-group mb-3">
//                               <textarea
//                                 placeholder={'Message'}
//                                 rows={4}
//                                 className={'form-control'}
//                               />
//                             </div>
//                             <div className={'row'}>
//                               <div className=" form-group col-md-6 mb-3">
//                                 <input
//                                   type={'text'}
//                                   placeholder={'Name'}
//                                   className={'form-control'}
//                                 />
//                               </div>
//                               <div className=" form-group col-md-6 mb-3">
//                                 <select className="form-control">
//                                   <option selected hidden>
//                                     Select Title
//                                   </option>
//                                   <option>Chancellor</option>
//                                   <option>Lawyer</option>
//                                   <option>Minister</option>
//                                 </select>
//                               </div>
//                             </div>
//                             <div className=" form-group mb-3">
//                               <select className="form-control">
//                                 <option selected hidden>
//                                   Relationship with deceased
//                                 </option>
//                                 <option>Sister</option>
//                                 <option>In Law</option>
//                                 <option>Uncle</option>
//                               </select>
//                             </div>
//                             <div className=" form-group mb-3">
//                               <Dropzone
//                                 onDrop={(acceptedFiles) =>
//                                   console.log(acceptedFiles)
//                                 }
//                               >
//                                 {({ getRootProps, getInputProps }) => (
//                                   <div
//                                     className={
//                                       'uploader-controls text-center fileuploader'
//                                     }
//                                   >
//                                     <div
//                                       {...getRootProps()}
//                                       className={'fileuploader-theme-dragdrop'}
//                                     >
//                                       <input
//                                         {...getInputProps()}
//                                         className={'fileuploader-input'}
//                                       />
//                                       <div className={'fileuploader-input'}>
//                                         <div
//                                           className={'fileuploader-input-inner'}
//                                         >
//                                           <img
//                                             src={toAbsoluteUrl(
//                                               'assets/img/fileuploader-dragdrop-icon.png',
//                                             )}
//                                           />
//                                           <h3
//                                             className={
//                                               'fileuploader-input-caption'
//                                             }
//                                           >
//                                             <span>
//                                               Drag and drop pictures of the
//                                               deceased to share
//                                             </span>
//                                           </h3>
//                                           <p>or</p>
//                                           <div className="fileuploader-input-button pm-bg">
//                                             <span>Browse Files</span>
//                                           </div>
//                                         </div>
//                                       </div>
//                                     </div>
//                                   </div>
//                                 )}
//                               </Dropzone>
//                             </div>
//                             <div
//                               className={
//                                 'form-group d-flex justify-content-center mb-3'
//                               }
//                             >
//                               <Button
//                                 className="mt-3 mt-lg-5 btn-lg border-20"
//                                 color={'var(--damirifa-red)'}
//                               >
//                                 <span className={'text-white'}>Submit</span>
//                               </Button>
//                             </div>
//                           </form>
//                         </div>
//                       </div>
//                     </div>
//                   </div>
//                   <div className={'row mt-4'}>
//                     <div className={'col-md-4'}>
//                       <h5 className={'card-title text-center fw-bold'}>
//                         Thank you for your donation
//                       </h5>
//                       <div className={'side-image text-center '}>
//                         {/*@ts-ignore*/}
//                         <Splide
//                           className={'thanks'}
//                           options={{
//                             direction: 'ttb',
//                             height: '10rem',
//                             wheel: true,
//                             arrows: false,
//                             perPage: 1,
//                             perMove: 1,
//                             type: 'loop',
//                             drag: 'free',
//                             autoplay: true,
//                             rewind: true,
//                             classes: {
//                               pagination: 'splide__pagination splide_thanks',
//                               page: 'splide__pagination__page',
//                             },
//                           }}
//                         >
//                           {THANKS.map((value, index) => (
//                             <SplideSlide key={index.toString()}>
//                               <ul className={'list-unstyled'}>
//                                 {value.map((item, key) => (
//                                   <li key={key.toString()}>
//                                     <p className="fw-light">{item}</p>
//                                   </li>
//                                 ))}
//                               </ul>
//                             </SplideSlide>
//                           ))}
//                         </Splide>
//                       </div>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </>
//   )
// }

// export default StandardDesign
const Standard = () => {
  return <div>Page</div>;
};

export default Standard;
