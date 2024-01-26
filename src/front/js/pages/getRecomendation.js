import React, { useContext, useEffect, useState } from "react";
import { Context } from "../store/appContext";
import "../../styles/getRecomendation.css";

export const GetRecomendation = () => {
  const { store, actions } = useContext(Context);
  const [currentStep, setCurrentStep] = useState(1);

  useEffect(() => {
    setTimeout(transition, 1000);

    document.querySelector('.js-trigger-transition').addEventListener('click', function (e) {
      e.preventDefault();
      transition();
    });
  }, []);

  function transition() {
    const bodyBefore = document.querySelector('body:before');
    const bodyAfter = document.querySelector('body:after');
    const loader = document.querySelector('.loader');

    // Close animation
    bodyBefore.style.top = '50%';
    bodyAfter.style.bottom = '50%';
    loader.style.opacity = 1;

    // Open animation after a delay
    setTimeout(() => {
      bodyBefore.style.top = '0%';
      bodyAfter.style.bottom = '0%';
      loader.style.opacity = 0;
    }, 1500);
  }

  function transition() {
    var tl = new TimelineMax();

    tl.to(CSSRulePlugin.getRule('body:before'), 0.2, { cssRule: { top: '50%' }, ease: Power2.easeOut }, 'close')
      .to(CSSRulePlugin.getRule('body:after'), 0.2, { cssRule: { bottom: '50%' }, ease: Power2.easeOut }, 'close')
      .to($('.loader'), 0.2, { opacity: 1 })
      .to(CSSRulePlugin.getRule('body:before'), 0.2, { cssRule: { top: '0%' }, ease: Power2.easeOut }, '+=1.5', 'open')
      .to(CSSRulePlugin.getRule('body:after'), 0.2, { cssRule: { bottom: '0%' }, ease: Power2.easeOut }, '-=0.2', 'open')
      .to($('.loader'), 0.2, { opacity: 0 }, '-=0.2');
  }

    return (
        <>




          <div class="loader">
  <div class="bar1"></div>
  <div class="bar2"></div>
  <div class="bar3"></div>
  <div class="bar4"></div>
  <div class="bar5"></div>
  <div class="bar6"></div>
</div>

<main>
  <div class="-content -index">
    <div>
      <h1>Loader Transition</h1>
      <a href="#" class="btn js-trigger-transition">Begin Transition</a>
    </div>
  </div>
</main>
          
        </>
        
      )
          }