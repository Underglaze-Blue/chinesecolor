var e=Object.defineProperty,t=Object.prototype.hasOwnProperty,n=Object.getOwnPropertySymbols,r=Object.prototype.propertyIsEnumerable,a=(t,n,r)=>n in t?e(t,n,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[n]=r,s=(e,s)=>{for(var o in s||(s={}))t.call(s,o)&&a(e,o,s[o]);if(n)for(var o of n(s))r.call(s,o)&&a(e,o,s[o]);return e},o=(e,t,n)=>(a(e,"symbol"!=typeof t?t+"":t,n),n);import{c as i,a as l,b as c,q as p,r as d,W as h,d as m,C as u,p as f,w as g,L as x,e as b,P as v}from"./vendor.fa26760f.js";var w;!function(e=".",t="__import__"){try{self[t]=new Function("u","return import(u)")}catch(n){const r=new URL(e,location),a=e=>{URL.revokeObjectURL(e.src),e.remove()};self[t]=e=>new Promise(((n,s)=>{const o=new URL(e,r);if(self[t].moduleMap[o])return n(self[t].moduleMap[o]);const i=new Blob([`import * as m from '${o}';`,`${t}.moduleMap['${o}']=m;`],{type:"text/javascript"}),l=Object.assign(document.createElement("script"),{type:"module",src:URL.createObjectURL(i),onerror(){s(new Error(`Failed to import: ${e}`)),a(l)},onload(){n(self[t].moduleMap[o]),a(l)}});document.head.appendChild(l)})),self[t].moduleMap={}}}("/chinesecolor/assets/"),(w||(w={})).SET_COLOR="SET_COLOR";const y={CMYK:[4,5,18,0],RGB:[249,244,220],hex:"#f9f4dc",name:"乳白",pinyin:"rubai",gray:242.86},E=l(i({colorStore:(e=y,a)=>{switch(a.type){case w.SET_COLOR:e=((e,a)=>{var s={};for(var o in e)t.call(e,o)&&a.indexOf(o)<0&&(s[o]=e[o]);if(null!=e&&n)for(var o of n(e))a.indexOf(o)<0&&r.call(e,o)&&(s[o]=e[o]);return s})(a.info,[]);break;default:return e}return e}}));const C=c.create({baseURL:""});C.interceptors.request.use((e=>s(s({},e),{params:s(s({},e.params||{}),{_:Number(new Date)})})),(e=>Promise.resolve(e))),C.interceptors.response.use((e=>(null==e?void 0:e.data)?Promise.resolve(e):Promise.reject(new Error("response 不存在"))),(e=>(console.log(e),Promise.resolve({data:s({success:!1,msg:"string"==typeof e?e:e.message},e)}))));const A=e=>new Promise(((t,n)=>{C.request(e).then((e=>{const r=e.data;200===e.status?t(r):(console.log(r.message),n(r))}))}));var k=new class{get(e,t={}){return A({url:e,method:"get",params:t})}post(e,t={}){return A({url:e,method:"post",data:t})}};const R=e=>{let[t,n,r]=e;t/=255,n/=255,r/=255;let a,s,o=0;const i=Math.min(t,n,r),l=s=Math.max(t,n,r),c=l-i;if(l===i)o=0;else{switch(l){case t:o=(n-r)/c+(n<r?6:0);break;case n:o=2+(r-t)/c;break;case r:o=4+(t-n)/c}o=Math.round(60*o)}return a=0===l?0:1-i/l,a=Math.round(100*a),s=Math.round(100*s),[o,a,s]};const B=p.div`
  position: relative;
  width: 350px;
  height: 60px;
  img{
    width: 350px;
    height: 60px;
    position: absolute;
  }
`,P=class extends d.Component{componentDidMount(){const e=P.canvas.current.getContext("2d"),t=["#0093D3","#CC006B","#FFF10C","#333333"],n=["C","M","Y","K"],r=["red","green","blue"],a=["R","G","B"],s=50*this.props.cmyk.length+25;e.lineWidth=4,e.font="10px sans-serif",e.fillStyle="#ffffff",e.lineCap="round",this.props.cmyk.forEach(((r,a)=>{const s=0===r?1.5*Math.PI:100===r?2*Math.PI:(360*r/100-90)*(Math.PI/180);e.beginPath(),e.arc(50*a+25,30,20,100===r?0:1.5*Math.PI,s),e.fillText(n[a],50*a+25,40),e.strokeStyle=t[a],e.stroke()})),this.props.rgb.forEach(((t,n)=>{const o=s+(350-s)*(t/255),i=15*(n+1)+2*n;e.beginPath(),e.strokeStyle=r[n],e.moveTo(s,i),e.lineTo(o,i),e.fillText(a[n],s-20,15*(n+1)+4*n),e.stroke()}))}render(){return d.createElement(B,{className:this.props.className},d.createElement("img",{alt:"bg",src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAV4AAAA8CAYAAAAuYNL/AAANv0lEQVR4Xu2de2xbVx3Hv79rO34krput3ToaKKo6kCItNHglhGySYdJGBdofjP7BHyAmMSFAvCQ0EJOgAoHEkJBAIBCPISEeQgHEEFCEhPC0RqEtJlWHAmPdpEE2Rl+p6ya242sf9Muuu5vrxz3Xvtdx7N/5Mz6P+/v8zv3m3PP4HYIkISAEhIAQ6CkB6mlr0pgQEAJCQAhAhFc6gRAQAkKgxwREeHsMXJoTAkJACIjwSh8QAkJACPSYgAhvj4FLc0JACAgBEV7pA0JACAiBHhMQ4e0xcGlOCAgBIeCr8B49dCj6QiIRjsfjoUhkPbS2FuYUYsymaVZHR02zUklUi8Vidf/6unni/PlyP7pA7Ogvr/SbP5RS9wH4DoCnARgAuI9/m4h+0V/k5Gn6lUDXwptOpyPhcDhumuZorFbzVF/JMFQ4HF4zTbOYy+Uq2wlJ7ADEH3o90BLee4joYS6hlIoBeALAm4lI6dUiuYaZgCehtIGiqampRCwWi0UqlagfACuRSLlUKpXOnTu3zn3Zjzo16hA7WkDaTn9EIpF4rFYb0fCfa5Yg7HAKryW+ZwHMElHR9aEkw9AT8Cy8mUwmXCgUdvv1Yjg9UDKMjWQyeTWbzZpBekfs0KMr/mjkZAnvlwEsWNMMaQBfJaJf6lGVXMNOwJPwHjp0KDo+Pj4+Ypo8r9WQ1oFKKlUuFgrxWj6fr05MTFSz2WyVM2YymdDKykoolUqFksmikc9H4wkg0qyejXC4trq6uno+oDlgsUP80c2Lbwnv/QC+YAnv3QA+SERv66ZeKTs8BLSFN51OJ2K12u4mI1SeFlgvFovF5eXlDS/oJicnR+LxeBwA193wLCXDuJrL5XjqwbckdrRGKf7Q62YtphpOA7iLiLTfAe6LScPYVWkxkNF7Gsm1EwloCe/c3FwS6+tJp4FrSq3ffvvthfn5+c1Rbafp2LFjoWeeeSY5SpRoqCORKCwsLBQ6rdteTuzQoyj+aM+phfDyLod5IvqTHmUgc+TIPhFdXVqDlc9VeHkUNB6N7nGabY6MXD916tQ1P3HMzMzsCm9sjDnrXC2XL3kdTTvrEDu8e0r84Z2ZlxIivF5oDVbetsLLC1CVfP4Wp8mRVOpKNpstBYEik8nEKvn8TU3avNDpgpvY0bmnxB+ds3MrKVMNboQG9/eWwnscME7MzOwNb2xsHoCop4WlpRd7gWNuevpV9nbMkZHq0VOnLh4Hal7aP34cxokTA2CH+MOL21vm9atf+fIwUsnQEmgpvLOzszcZpRJvDL+RSoZxsVcHHfhAQ6xW22tvvxaLlRYXF6948BbNzs6OD4AdEH948HqbrD71K38eRmoZWgJNhTczOTlWiUZ3OUTX9x0GbtSb7UCIlMvXssvL193K8u9ihw4l/TzN/LFaLl9bHgB/eLFDn5jkFALNCTQV3unp6b32PbYlw1jL5XL57YCYTqdTsVpttN427xVeWlq6qPMsYocOJW95nP7gAxa5XO6STi397A8vdujYKnmEQDsCDcLrXP3n8/sHDx680O2WsU7dwFubnnvuuVvs+3x1djnwIYlbk8mb6+3uVDvEH532nPblOu1XwTyN1DpsBBqE9/Dhw7vt+2nJNIsnn3pqdTvB3HXHHeMqHOaDFpuJ9w+fPXv2artnEjuC89gw+yM4qlLzMBFoEN50On2bfXT5v0LhclBHd3VBNxu95nK5/7YrL3bo0vWeb5j94Z2WlBACjQS2CC/HPb1m+zw3gMqTmvOpQcO9e3p6b80W22FXoXC5VTxfsSNobwCD4o+3TE3dQqFQuE6sXb8Knqq0MCwEtgjv1NTUaDIUStWNj6TK17JZvR0EQQPLZCbHKvlXdloUqtX8uXPn1pq1K3YE7Q0OstOFPzzsTAnaEi92BP0sUv/wENgivM4jokEEqekUrXMrU7sjy2JHp5T1y3Xjj1ostrq4uNgXcWu92NGMjlKKj9NfISJPB3v0SUvOQSSwRXidm/T7YX63Dt05r9juMIXYEXxXdfqDRs3iyZPNF2F3kj/a2WGnqpSaBvBNACsAbgXwLwAfIaJtvUkleM9LC34Q2CK8zn2WkVSq4/gIfjycvQ5nvIV2+3nFDr/pN9Y3jP6oU1BKcSAnDgN5HxH9h/+ulDoO4N9E9Fjw9KWFnU5gi/AeOXJknz3I+cLSEu8c6NU1PG4saW56+rZ6Jg6WfubMmZeaFRI73FD68vvQ+cMmvB8AMENED9n+xiFN7yWiX/tCVyoZaAIivL1379AJ1qD8I7SJ7FcAnOFbhZVSHMzpfdZvF4noB7pdiueXDcPY1epGF916JN/OIyBTDT322TB+og/K1I9NeD8JYA8RPaKU4pHu663ffkhEh3W7lMTj1SU1ePl6vrjW6SqwLK4B/bzYOUyLa0qpCQC/A/AuInrWmuPl8Kl/JSJedNNKIrxamAYyU8+2kymljgD4BgBejOC72/4J4ONEpDWH7GXbT1DbyawrX34C4NX2a7yVUq+z7NlPRG4n6rbcXbcd2+KUUvw5/Gci+rFtFPdHAF8koid1eno3/vBrO5nzCh6lFN/2+3UAx9z8ULfRix12LkqpuwB8F8BlXlTjPgHgR0T0fR1+nEcCoeuSGrx8PTlAoZTiQxl/sRYf6qvAXwLwN90rsb1sdG84QOHThn3rRZ8H8DAR8R1bm0kp9S0A7+VPTrcXvis7fDrQopTikJ9Zyx+XlFIPAngDEX1Ct4t3ZYe//riHiB5WSs3wFesA3k1EF4Kwo1mdSikeRNSIyNdrsHSfX/LtTAJbjwwfPRS99tIrEb28hGBsZ75Sild/30hEH7KJFYd6nCKiRR10znnCXfsKl0+cOF9uVvZocHbcB+ABAPw5+SYerSul+Jqi3wPgsJnvdxPefrDD+mdxr/XP4lMAfgPgrUSkfaNzgx3tjnA7/OFXCMb6iBfA4wD4H/kDRMQjUO3kxQ7tSiWjEHAh4BokRycEoxtlpdSjPOIlol+55W32e7PQiF6D5PhkBwvvPQB4Po8/1X+rlPoMAJ5eeA+AB9sJb7/YYfvnx5/K/Hn+MSJa0PVNv9hhCe9nAYwDeIKIPqprA+frxA4v9UteIdCKQIPwNpkf7ToIulKKR1VJIvq87aXnwCRzRPSEm3ucwbd1bjgOyI668PKJpe8BeCcAFiye7+NRY1vh7Rc7bD44AOAxIuJ/JtqpX+ywhJf71jusEW+RiD6na0gndujWLfmEQDsCPQmErpR6LQDeWH4/EfFCBM+Lfto66fOzdg/YacDqIAKI2xdzlFK8MMUHOC4Q0aNKqT+0E95+ssMmvHwghbdAvV33NWlmh85dfEH7w+pTPIJ/loh4n23b1KkdbvXK70JAh0DTq3/S6fSeWK02Uq9AJ/C4W2NKKZ5T5AWppwHwefaneB+kWzlnQHMv84N+2+EQXt6vyaP11xBR3k14+8mOboTXaUclEimfPn1aa141SH9YwmsA+CmAk0TEXyUtUzd2uPVZ+V0IuBFoKryTk5Nj447LLnU+790as14Ovo6Hozm5biNzThdweS+XEgZph46t9TyDbEe78JxORv3sDy92ePG95BUCzQi0ut6d0un0zfZRLxeOpFJXstlsqRcoM5lMrJLP846BG8ka7fLoylW0rUJih0/OEn/4BFKqEQIAWgkv+Gjr2traHuc58oWlpRd7QW5ueprPwN9IHBRndHT0UjabNb20L3Z4odU6r/jDH45SixBgAi2Fl390HtOtI9NZTOkUbzqdjsRqtb3O8t0clxU7OvXG5ukq8Ufn+KSkEGhKoK3wcgnnkUqb+F7N5XLaG+51+AfZVpB1O20Lsq0g6xY7dHqp5BEC3RNwFV5uYm5uLon19aSzuZJhrB08ePD6/Px8tZtHsbb2jMVqNT7NtjUlEoWFhYVCN/XXy4odehTFH3qcJJcQ6JSAlvC6TDuo+MZG6aVicd3rNfA8BbAvHk8UR0Zi9ivl68Z0M73QCkibaQexo8/8Ua1Wi9evXy/2W7+ythVyfI5l6xRjlA/UENHPO30RpdxwEdAWXmvaIRIOh28Kb2zwkdmGxNfBh8rlYiEer+Xz+erExEQ1m81ujoYzmUxoZWUllEqlQsli0ahGo3H7de32ysyRkappmldyuVwg91fxvKXYIf7o9FVvEhUtZp1gvFNnm2S9XQmE3qkHdn45T8LL5vJn6PPPP787Uqnwf3nfE2/IP3DgwNVupy/cHkzscCP08u/ij0ZOTYSXp+E4dsedelRfziXxeL3QGqy8noXXMp8yk5Oj+Wg0ngAifiDhSGipcrmYXV5e87BPt9umxY4WBMUfrbuWJbxfA5ADwDFHOIbHh71ONYjwdvv67tzynQrvDYt5znRsbCweCoXizeZp26EpGYbqdB7Pb+RiByD+0OtVTUa8/PXHsToeIqLzerVIIHRdToOYr2vhtUPhOLgvvJAIx+PxkGEY4VKpFAqHw5vzwaZpVmOxWLVWq5nFYrG6f/+62Sqe7naDFju22wNb2+83fziFl59WKcUhTx8hon/0Fz15mn4k4Kvw9qOB8kxCwG8ClvByEJ6/W4eQ+Ag737fGwdglCQFXAiK8rogkgxAQAkLAXwIivP7ylNqEgBAQAq4ERHhdEUkGISAEhIC/BER4/eUptQkBISAEXAmI8LoikgxCQAgIAX8JiPD6y1NqEwJCQAi4EhDhdUUkGYSAEBAC/hL4P8prh5QvHil/AAAAAElFTkSuQmCC"}),d.createElement("canvas",{ref:P.canvas,width:350,height:60}))}};let S=P;S.canvas=d.createRef();const I=h`
   to {
      transform: rotate(1turn);
   }
`,F=p.div`
  position: fixed;
  top: 0;
  left: 0;
  height: 100vh;
  width: 100vw;
  background-color: black;
  display: flex;
  justify-content: center;
  align-items: center;
`,U=p.aside`
  position: relative;
  width: 8em;
  height: 8em;
  background: black;
  border-radius: 50%;
  box-shadow: inset 0.1em -0.5em crimson;
  animation: ${I} 2.5s linear infinite;
  overflow: hidden;
  
  &::before,
  &::after {
    position: absolute;
    content: "";
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    background: inherit;
    border-radius: inherit;
    box-shadow: inherit;
  }

  &::before {
    filter: blur(5px);
  }

  &::after {
    filter: blur(10px);
  }
`;class j extends d.Component{render(){return d.createElement(F,null,d.createElement(U,null))}}var O={setColorInfo:e=>({type:w.SET_COLOR,info:e})};const H=p.div`
  flex: 0 0 70vw;
  margin-right: 5vw;
  width: 70vw;
  padding: 1vh 0;
  box-sizing: border-box;
  height: 80vh;
  background: rgba(255,255,255,.1);
  border-radius: 10px;
  transition: background-color 2s ease-in;
  ul{
    height: 78vh;
    width: 100%;
    overflow-y: auto;
    overflow-x: hidden;
    display: grid;
    grid-template-columns: repeat(auto-fill, calc(350px + 2vh));
    grid-gap: 1vh;
    justify-content: space-around;
    &::-webkit-scrollbar {
      width: 0;
    }
  }
  li{
   height: 110px;
   background: rgba(255,255,255,.2);
   margin: 1vh 0;
   padding: 0 1vh;
   border-radius: 5px;
   transition: transform 0.6s cubic-bezier(0.165, 0.84, 0.44, 1), background-color 2s ease-in;
   transform: scale(1);
   cursor: pointer;
   .title{
      transition: all 0.6s cubic-bezier(0.165, 0.84, 0.44, 1);
      transform: scale(1);
   }
   &:hover{
    transform: scale(1.05);
    .title{
      transform: scale(1.15);
    }
   }
    .color{
      display: none;
    }
  }

  @media (max-width: 1250px) {
    flex: 1;
    width: 96vw;
    margin: 0 auto;
    box-sizing: border-box;
    .canvasWrapper{
      display: none;
    }
    ul{
      grid-template-columns: repeat(auto-fill, 220px);
      box-sizing: border-box;
      height:70vh;
      li{
        position: relative;
        .info{
          display: flex;
          flex-direction: column;
          align-items: flex-start;
          padding:1vmin;
        }
        .title{
          position: absolute;
          right: 1vmin;
          top: 1vmin;
          display: block;
          strong{
            margin-top: 20px;
          }
          cite{
            margin-top: 20px;
            span{
              display: none;
            }
          }
          .color-block{
            display: none;
          }
        }
        .color{
          display: block;
          border-radius: 25px;
        }
      }
    }
  }
  @media (max-width: 760px){
    ul{
      height: 76vh!important;
    }
  }
  @media (max-width: 710px) {
    ul{
      grid-template-columns: repeat(auto-fill, calc(50% - 2vh));
    }
  }
  @media (max-width: 470px) {
    li{
      height: 120px;
      .info{
        align-items: center!important;
      }
      .title{
        top: 60px!important;
        left: 1vmin;
      }
      .color{
        margin-top: 24px;
      }
    }
  }
  @media (max-width: 375px){
    ul{
      height: 80vh!important;
    }
  }
`,M=p.article`
  display: flex;
  color: #ffffff;
  font-size: 14px;
  flex-direction: column;
`,N=p.aside`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-around;
`,D=p.strong`
  flex: 0 0 60%;
  white-space: nowrap;
  span{
    font-family: 'VictorMono';
  }
`,X=p.section`
  flex: 0 0 25px;
  height: 25px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, .5);
`;class L extends d.Component{constructor(e){super(e),this.handleGetColors=()=>{this.setState({loading:!0}),(async()=>k.get("./data/colors.json"))().then((e=>{const t=((n=e).sort(((e,t)=>R(e.RGB)[0]===R(t.RGB)[0]?R(t.RGB)[1]-R(e.RGB)[1]:R(t.RGB)[0]-R(e.RGB)[0])),n);var n;const r=Math.random()*t.length>>0,[a,o,i]=t[r].RGB;this.setState({colors:t,gray:(30*a+59*o+11*i)/100}),this.props.setColorInfo(s(s({},this.state.colors[r]),{gray:this.state.gray}))})).finally((()=>{setTimeout((()=>{this.setState({loading:!1})}),1500)}))},this.handleClick=e=>{const[t,n,r]=e.RGB,a=(30*t+59*n+11*r)/100;this.setState({gray:a}),this.props.setColorInfo(s(s({},e),{gray:a}))},this.handleBackgroundColor=(e,t)=>e>0?`rgba(0,0,0,${t})`:`rgba(255,255,255,${t})`,this.handleStyle=e=>({backgroundColor:this.handleBackgroundColor(this.state.gray-175,e),boxShadow:`0 0 10px ${this.handleBackgroundColor(175-this.state.gray,e)}`}),this._renderColors=e=>e.map(((e,t,n)=>d.createElement("li",{style:this.handleStyle(.2),onClick:()=>{this.handleClick(e)},key:e.name+e.pinyin},d.createElement(S,{className:"canvasWrapper",cmyk:e.CMYK,rgb:e.RGB}),d.createElement(M,null,d.createElement(N,{className:"font-small info"},d.createElement("span",null,"RGB: ",e.RGB.join(", ")),d.createElement("span",null,"CMYK: ",e.CMYK.join(", ")),d.createElement("span",null,"HEX: ",e.hex.toLocaleUpperCase())),d.createElement(N,{className:"title"},d.createElement(D,null,d.createElement("cite",null,e.name," ",d.createElement("span",{className:"font-small"},e.pinyin.toLocaleUpperCase()))),d.createElement(X,{className:"color-block",style:{backgroundColor:`rgb(${e.RGB.join(",")})`}}))),d.createElement(X,{className:"color",style:{backgroundColor:`rgb(${e.RGB.join(",")})`}})))),this.state={colors:[],gray:0,loading:!1}}componentDidMount(){this.handleGetColors()}render(){return this.state.loading?d.createElement(j,null):d.createElement(H,{style:this.handleStyle(.1)},d.createElement("ul",null,this._renderColors(this.state.colors)))}}var T=m((e=>e),O)(L);class z extends d.Component{constructor(){super(...arguments),o(this,"checkProps",(e=>{const{start:t,suffix:n,prefix:r,redraw:a,duration:s,separator:o,decimals:i,decimal:l}=this.props;return s!==e.duration||t!==e.start||n!==e.suffix||r!==e.prefix||o!==e.separator||i!==e.decimals||l!==e.decimal||a})),o(this,"createInstance",(()=>("function"==typeof this.props.children&&g(this.containerRef.current&&(this.containerRef.current instanceof HTMLElement||this.containerRef.current instanceof SVGTextElement||this.containerRef.current instanceof SVGTSpanElement)),((e,t)=>{const{decimal:n,decimals:r,duration:a,easingFn:s,end:o,formattingFn:i,prefix:l,separator:c,start:p,suffix:d,useEasing:h}=t;return new u(e,p,o,r,a,{decimal:n,easingFn:s,formattingFn:i,separator:c,prefix:l,suffix:d,useEasing:h,useGrouping:!!c})})(this.containerRef.current,this.props)))),o(this,"pauseResume",(()=>{const{reset:e,restart:t,update:n}=this,{onPauseResume:r}=this.props;this.instance.pauseResume(),r({reset:e,start:t,update:n})})),o(this,"reset",(()=>{const{pauseResume:e,restart:t,update:n}=this,{onReset:r}=this.props;this.instance.reset(),r({pauseResume:e,start:t,update:n})})),o(this,"restart",(()=>{this.reset(),this.start()})),o(this,"start",(()=>{const{pauseResume:e,reset:t,restart:n,update:r}=this,{delay:a,onEnd:s,onStart:o}=this.props,i=()=>this.instance.start((()=>s({pauseResume:e,reset:t,start:n,update:r})));a>0?this.timeoutId=setTimeout(i,1e3*a):i(),o({pauseResume:e,reset:t,update:r})})),o(this,"update",(e=>{const{pauseResume:t,reset:n,restart:r}=this,{onUpdate:a}=this.props;this.instance.update(e),a({pauseResume:t,reset:n,start:r})})),o(this,"containerRef",d.createRef())}componentDidMount(){const{children:e,delay:t}=this.props;this.instance=this.createInstance(),"function"==typeof e&&0!==t||this.start()}shouldComponentUpdate(e){const{end:t}=this.props;return this.checkProps(e)||t!==e.end}componentDidUpdate(e){const{end:t,preserveValue:n}=this.props;this.checkProps(e)&&(this.instance.reset(),this.instance=this.createInstance(),this.start()),t!==e.end&&(n||this.instance.reset(),this.instance.update(t))}componentWillUnmount(){this.timeoutId&&clearTimeout(this.timeoutId),this.instance.reset()}render(){const{children:e,className:t,style:n}=this.props,{containerRef:r,pauseResume:a,reset:s,restart:o,update:i}=this;return"function"==typeof e?e({countUpRef:r,pauseResume:a,reset:s,start:o,update:i}):d.createElement("span",{className:t,ref:r,style:n})}}o(z,"propTypes",{decimal:f.string,decimals:f.number,delay:f.number,easingFn:f.func,end:f.number.isRequired,formattingFn:f.func,onEnd:f.func,onStart:f.func,prefix:f.string,redraw:f.bool,separator:f.string,start:f.number,startOnMount:f.bool,suffix:f.string,style:f.object,useEasing:f.bool,preserveValue:f.bool}),o(z,"defaultProps",{decimal:".",decimals:0,delay:null,duration:null,easingFn:null,formattingFn:null,onEnd:()=>{},onPauseResume:()=>{},onReset:()=>{},onStart:()=>{},onUpdate:()=>{},prefix:"",redraw:!1,separator:"",start:0,startOnMount:!0,suffix:"",style:void 0,useEasing:!0,preserveValue:!1});const G=p.svg`
  circle {
    stroke-dashoffset: 0;
    transition: all 2s linear;
    stroke: rgba(54,52,51,.2);
    stroke-width: 6px;
    transform: rotate(-90deg);
    transform-origin: 50% 50%;
    &.bar{
      stroke-dashoffset: 0;
    }
  }
`,K=p.div`
  display: block;
  height: 80px;
  width: 80px;
  border-radius: 100%;
  position: relative;
  span {
    position: absolute;
    display: block;
    height: 80px;
    width: 80px;
    left: 50%;
    top: 50%;
    content: attr(data-percent);
    margin-top: -40px;
    margin-left: -40px;
    border-radius: 100%;
    line-height: 80px;
    font-size: 14px;
    text-align: center;
  }
  @media (max-width: 1250px){
    width:60px;
    height:60px;
    margin-right: 10px;
    svg{
      transform: scale(.75);
      transform-origin: left top;
    }
    span{
      font-size: 14px;
    }
  }
  @media (max-width: 760px){
    width:40px;
    height:40px;
    margin-right: 10px;
    svg{
      transform: scale(.5);
      transform-origin: left top;
    }
    span{
      font-size: 12px;
    }
  }


`,q=class extends d.PureComponent{constructor(e){super(e);const t=2*Math.PI*35;this.state={perimeter:t,radius:35,strokeDashoffset:2*Math.PI*35}}componentDidUpdate(){this.setState({strokeDashoffset:this.state.perimeter-this.props.percent/100*this.state.perimeter})}render(){return d.createElement(K,{"data-percent":this.props.percent},d.createElement(G,{id:"svg",width:"80",height:"80"},d.createElement("circle",{r:this.state.radius,cx:"40",cy:"40",fill:"transparent"}),d.createElement("circle",{ref:q.circle,style:{strokeDashoffset:this.state.strokeDashoffset,stroke:this.props.color},className:"bar",r:this.state.radius,cx:"40",cy:"40",fill:"transparent",strokeDasharray:this.state.perimeter})),d.createElement("span",null,d.createElement(z,{preserveValue:!0,end:this.props.percent})))}};let Q=q;Q.circle=d.createRef();const Y=p.div`
  flex: 1;
  min-width: 300px;
  margin: 0 1vh;
  @media (max-width: 375px){
   margin: 0;
  }
`,V=p.main`
  width: 300px;
  height: 80vh;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 160px 140px;
  border-radius: 10px;
  transition: background-color 2s ease-in;
  @media (max-width: 1250px){
    height: 10vh;
    width: 80vw;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding:0 5vmin;
    margin: 0 auto 2vmin;
  }
  @media (max-width: 375px){
    height: 56px;
    width: 96vw;
    padding: 0;
  }
`,W=p.h1`
  font-size: 100px;
  width: 110px;
  min-height: 540px;
  line-height: 140px;
  font-weight: 400;
  flex: 0 0 110px;
  display: flex;
  justify-content: center;
  align-items: center;
  color: #ffffff;
  font-family: 'yuweif2229ad0221222ab', "Microsoft YaHei";
`,J=p.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  padding: 90px 0;
  aside{
    display: flex;
    span{
      font-size: 18px;
      margin-right: 5px;
    }
  }
  @media (max-width: 1250px){  
    flex-direction: row;
  }
  @media (max-width: 500px){
    display: none;
  }
`,Z=p.section`
  box-sizing: border-box;
  height: 620px;
  padding: 20px 5px 0;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  cite{
    font-size: 20px;
    word-break: break-all;
    font-family: 'Quostige';
    font-weight: 400;
  }
  @media (max-width: 1250px){
    height: auto;
    flex: 1;
    flex-direction: row;
    justify-content: center;
    padding:0;
    h1{
      line-height: 1!important;
      min-height: auto;
      font-size: 5vmin;
      width:auto;
      white-space: nowrap;
    }
    cite{
      display: none;
    }
  }
  @media (max-width: 500px){
    h1{
      font-size:50px;
    }
  }
  @media (max-width: 375px){
    h1{
      font-size: 30px;
    }
  }

`,$=p.section`
  grid-column-start: 1;
  grid-column-end: 3; 
  padding: 10px;
  font-size: 14px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-around;
  font-family: 'VictorMono';
  cite{
    flex: 1;
    white-space: nowrap;
    &:nth-child(-n+3){
      @media (max-width: 1250px){
        display: none;
      }
    }
  }
  @media (max-width: 375px){
    padding-right: 20px;
  }
`;class _ extends d.PureComponent{constructor(e){super(e),this.handleBackgroundColor=(e,t)=>e>0?`rgba(0,0,0,${t})`:`rgba(255,255,255,${t})`,this.renderCountUp=(e,t)=>{const n="RGB"===t?e:R(e),r=["°","%","%"];return n.map(((e,a)=>d.createElement(d.Fragment,{key:t.split("")[a]},d.createElement(z,{preserveValue:!0,end:e}),d.createElement("span",null,"RGB"===t?"":r[a],a<n.length-1?", ":""))))},this.renderSVG=e=>{const t=["#0093D3","#CC006B","#FFF10C","#333333"],n=["C","M","Y","K"];return e.map(((e,r)=>d.createElement("aside",{key:t[r]},d.createElement("span",null,n[r]),d.createElement(Q,{key:t[r],color:t[r],percent:e}))))};const t=this.props.colorInfo,n=R(t.RGB);this.state={r:[0,t.RGB[0]],g:[0,t.RGB[1]],b:[0,t.RGB[2]],h:[0,n[0]],s:[0,n[1]],v:[0,n[2]],gray:[0,t.gray]}}render(){const e={backgroundColor:this.handleBackgroundColor(this.props.colorInfo.gray-175,.1),boxShadow:`0 0 10px ${this.handleBackgroundColor(175-this.props.colorInfo.gray,.1)}`};return d.createElement(Y,null,d.createElement(V,{style:e},d.createElement(J,null,this.renderSVG(this.props.colorInfo.CMYK)),d.createElement(Z,null,d.createElement(W,{style:{lineHeight:this.props.colorInfo.name.length<5?"140px":"110px"}},this.props.colorInfo.name),d.createElement("cite",null,this.props.colorInfo.pinyin.toLocaleUpperCase())),d.createElement($,null,d.createElement("cite",null,"RGB: ",this.renderCountUp(this.props.colorInfo.RGB,"RGB")),d.createElement("cite",null,"Gray scale:",d.createElement(z,{key:"gray",decimals:2,preserveValue:!0,end:this.props.colorInfo.gray})),d.createElement("cite",null,"HSV: ",this.renderCountUp(this.props.colorInfo.RGB,"HSV")),d.createElement("cite",null,"HEX: ",this.props.colorInfo.hex.toLocaleUpperCase()))))}}var ee=m((e=>({colorInfo:e.colorStore})))(_);const te=p.div`
  text-align: center;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  font-size: calc(10px + 2vmin);
  color: white;
`,ne=p.main`
  width: 100vw;
  height: 100vh;
  padding: 0 0 10vh;
  background: #ffffff;
  transition: background-color 2s ease-in;
  overflow: hidden;
  box-sizing: border-box;
`,re=p.h1`
  padding: 2vh 0;
  transition: color 2s ease-in;
  font-weight: bolder;
  font-family: 'Omega-Sans';
  text-align: center;
  @media (max-width: 760px){
    font-size: 30px;
  }
  @media (max-width: 375px){
    font-size: 20px;
    padding: 1vmin 0;
  }

`,ae=p.main`
  display: flex;
  @media (max-width: 1250px){
    flex-direction: column;
  }
`;class se extends d.Component{componentDidMount(){window.addEventListener("load",(()=>{x.init({lineSize:.05,opacityDecrement:.55,speedExpFactor:.8,lineExpFactor:.6,sparklesCount:65,maxOpacity:.99,texture1:"https://i.imgur.com/ymopj4x.jpg"})}))}render(){return d.createElement(te,null,d.createElement(ne,{style:{backgroundColor:`rgb(${this.props.colorInfo.RGB.join(",")})`}},d.createElement(re,{style:{color:this.props.colorInfo.gray>175?"#444444":"#ffffff"}},"CHINESE COLORS"),d.createElement(ae,null,d.createElement(ee,null),d.createElement(T,null))))}}var oe=m((e=>({colorInfo:e.colorStore})))(se);b.render(d.createElement(v,{store:E},d.createElement(oe,null)),document.getElementById("root"));
