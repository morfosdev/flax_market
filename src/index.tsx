

          // ---------- import React Packs
          import React from 'react';
          import * as RN from 'react-native';

          // ---------- import Variables Pack
          import { create } from 'zustand';

          // ---------- import Local Tools
          import { mapElements } from './tools/base/project/mapElements';
          import * as functions from './tools/base/functions';
          import * as Elements from './tools/base/Elements';
          import { Project } from './tools/base/project';
          import * as jsvals from './tools/base/jsvals';
          import { props } from './tools/base/props';
          import * as customs from './tools/customs';
          import * as stls from './tools/base/stls';
          import { tools } from './tools';

          // ---------- set Caps Inputs
          const currRoute = 'home';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"home",

          styles:[
              {
                backgroundColor: '#101',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
                width: '100%',
              }
              ],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: "purple", height: "50px", }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Dashboard - Login`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: "blue", height: "50px", }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsTypo");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Design System`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: "white", height: "50px", }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("HomePage");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Home Page`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: "yellow", height: "50px", }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("TestesPage");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Testes Page`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"dsTypo",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '20%',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '52px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2Flogo%20ds.png?alt=media&token=b402882d-6d33-4e0c-bb25-ca5842d7fac6`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsTypo");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Typography`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsColors");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Colors`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsComp");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Components`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ backgroundColor: "#EFEFEF", width: "100%", padding: 20, height: "100%", }`],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  fontSize: 32,
  fontWeight: '700',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Typography`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 30,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  paddingVertical: 10,
  paddingHorizontal: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `— Heading`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Size`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Weight`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 40, 
  fontWeight: "600", 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Explore the world.`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `H1`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `40px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `600`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 32, 
  fontWeight: "700", 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Explore the world.`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `H2`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `32px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `700`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 24, 
  fontWeight: "700", 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Explore the world.`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `H3`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `24px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `700`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: '600', 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Explore the world.`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `H4`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `18px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `600`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 16, 
  fontWeight: '600', 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Explore the world.`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `H5`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `16px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `600`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: '500', 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Explore the world.`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `H6`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `14px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `500`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 50,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  paddingVertical: 10,
  paddingHorizontal: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `— Body`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Size`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Weight`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "400", 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in neque in massa rhoncus suscipit. `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `P1`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `14px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `400`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in neque in massa rhoncus suscipit. `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `P2`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `14px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `500`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 50,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  paddingVertical: 10,
  paddingHorizontal: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `— Body`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Size`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  fontSize: 14,
  fontWeight: '500',
  fontFamily: 'Inter',
}`
          ],

          children: [
            `Weight`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 12, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `Aa —  Label`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `L1`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `12px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `500`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexDirection: 'row',
  alignItems: 'center',
  justifyContent: 'center',
  paddingHorizontal: 10,
  height: '70',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 12, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 350,
}`
          ],

          children: [
            `AA —  LABEL`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `L2`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `12px`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
  flex: 1,
  color: '#5C5F6A',
}`
          ],

          children: [
            `500`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"dsColors",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '20%',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '52px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2Flogo%20ds.png?alt=media&token=b402882d-6d33-4e0c-bb25-ca5842d7fac6`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsTypo");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Typography`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsColors");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Colors`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsComp");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Components`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ backgroundColor: "#EFEFEF", width: "100%", padding: 20 }`],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
  flexDirection: "row",
  alignItems: "center",
  flexWrap: "wrap",
  padding: 10
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
  flex: 1,
  maxWidth: 75,
  borderRadius: 6,
  alignItems: "center",
  shadowColor: '#000',
  overflow: "hidden",
  shadowOffset: { 
     width: 0,
     height: 2
  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: "100%",
  height: 30,
  backgroundColor: "$var_all.colors.primary"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ padding: 5 }`
          ],

          children: [
            `primary`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
  flex: 1,
  maxWidth: 75,
  borderRadius: 6,
  alignItems: "center",
  shadowColor: '#000',
  overflow: "hidden",
  shadowOffset: { 
     width: 0,
     height: 2
  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: "100%",
  height: 30,
  backgroundColor: "$var_all.colors.secondary"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ padding: 5 }`
          ],

          children: [
            `secondary`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
  flex: 1,
  maxWidth: 75,
  borderRadius: 6,
  alignItems: "center",
  shadowColor: '#000',
  overflow: "hidden",
  shadowOffset: { 
     width: 0,
     height: 2
  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: "100%",
  height: 30,
  backgroundColor: "$var_all.colors.success"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ padding: 5 }`
          ],

          children: [
            `success`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
  flex: 1,
  maxWidth: 75,
  borderRadius: 6,
  alignItems: "center",
  shadowColor: '#000',
  overflow: "hidden",
  shadowOffset: { 
     width: 0,
     height: 2
  },
    shadowOpacity: 0.25,
    shadowRadius: 3.84
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  width: "100%",
  height: 30,
  backgroundColor: "$var_all.colors.error"
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ padding: 5 }`
          ],

          children: [
            `error`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"dsComp",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '20%',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '52px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2Flogo%20ds.png?alt=media&token=b402882d-6d33-4e0c-bb25-ca5842d7fac6`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsTypo");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Typography`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsColors");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Colors`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("dsComp");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Components`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `xxx`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ backgroundColor: "#EFEFEF", width: "100%", padding: 20 }`],
            arrProps: [],
            arrItems: [
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [" "],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.inputs.ipt1`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "red", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [false]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Ocultar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`all.toggles.box1`],
          value: [true]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `Mostrar`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: "100%", padding: 5, backgroundColor: "#FFF", flexDirection: "row", alignItems: "center"}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const path = "all.toggles.checkbox1";
  const currState = tools.getCtData(path);
  tools.functions.setVar({
		args: '',
		pass: { keyPath: [path], value: [!currState] },
	});
}]
 , trigger: 'on press'
}})],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, alignItems: "center", justifyContent: "center", backgroundColor: "$var_all.colors.secondary", borderRadius: 4, marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkbox1", "==", true ]]
 , trigger: 'on listen'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
xmlns="http://www.w3.org/2000/svg"
    width={40}
    height={40}
    viewBox="0 0 40 40"
    {...props}
  >
    <Path
      stroke="#FFF"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={4.17}
      d="M33.333 10 15 28.333 6.667 20"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg></svg>
      `,

      altura: "14px",

      largura: "14px",

      preenchimento: [`transparent`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 20, height: 20, backgroundColor: "#FFF", borderRadius: 4, borderWidth: 2, borderColor: "#CCC", marginRight: 5}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => [ "all.toggles.checkbox1", "==", false ]]
 , trigger: 'on listen'
}})],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `JavaScript`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ marginTop: 20 }`
          ],

          children: [
            `Check Dentro de Lista`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: 100, height: 20, backgroundColor: "yellow", alignItems: "center", justifyContent: "center" }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`users`],
            arrFuncs: [()=>{}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ color: "blue" }`
          ],

          children: [
            `GetDocs: users`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
const item = tools.findFlatItem([[{idx: 0, item: {name: "João"}}]]);

console.log({item});
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Testar findFlatItem.ts`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '122px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '122px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#202533',
borderRadius: 5,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '122px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#fff',
borderRadius: 5,
alignItems: 'center',
borderWidth: 1,
borderColor: '#B6B7BC',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#5C5F6A',
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '122px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#fff',
borderRadius: 5,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#000',
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '122px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#fff',
borderRadius: 5,
alignItems: 'center',
borderWidth: 1,
borderColor: '#000',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#000',
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '110px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
borderWidth: 1,
borderColor: '#000',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#fff',
fontSize: 12,
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '110px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#fff',
borderRadius: 5,
alignItems: 'center',
borderWidth: 1,
borderColor: '#000',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#000',
fontSize: 12,
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 10,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '110px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#fff',
borderRadius: 5,
alignItems: 'center',
borderWidth: 1,
borderColor: '#B6B7BC',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#B6B7BC',
fontSize: 12,
}`
          ],

          children: [
            `Button Label`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '320px',
height: '45px',
justifyContent: 'center',
borderRadius: 6,
borderWidth: 1,
borderColor: '#B6B7BC',
paddingHorizontal: 15,
paddingVertical: 10,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '320px',
height: '45px',
justifyContent: 'center',
borderRadius: 6,
borderWidth: 1,
borderColor: '#BE1313',
paddingHorizontal: 15,
paddingVertical: 10,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: 320,
height: 128,
borderRadius: 6,
borderColor: '#B6B7BC',
borderWidth: 1,
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
    width: '103px',
    height: '36px',
    borderRadius: 50,
    paddingHorizontal: 16,
    paddingVertical: 2,
    backgroundColor: '#dddddd',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  }`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
    fontWeight: '500',
    fontSize: '12',
  }`
          ],

          children: [
            `T-Shirt`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '8px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{

}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="red"
    viewBox="0 0 16 16"
    {...props}
  >
    <Path
      stroke="#CCC"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.5 1.5 8 8m0 0-6.5 6.5M8 8 1.5 1.5M8 8l6.5 6.5"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.5 1.5L8 8M8 8L1.5 14.5M8 8L1.5 1.5M8 8L14.5 14.5" stroke="#CCCCCC" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a0AdmLogin",

          styles:[`{ 
width: '100%',
height: '100%',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#eee',
padding: 35,
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
maxWidth: '400px',
width: '100%',
backgroundColor: '#FFF',
alignItems: 'center',
paddingVertical: 25,
paddingHorizontal: 10,
borderRadius: 8,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
padding: 10,
margimBottom: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Digite um Email válido',
}`],

          stylesArray: [`{
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
padding: 10,
}`],

          path: [`sc.a0.login.forms.email`],

          funcsArray: [(callback) => {
  // Remove espaços
  let newValue = callback.replace(/s+/g, "");

  // Permitir apenas letras, números, @, ponto, hífen e underscore
  newValue = newValue.replace(/[^a-zA-Z0-9@._-]/g, "");

  // Atualizar a variável no Flaxboll
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a0.login.forms.email"],
      value: [newValue]
    }
  });

  // Regex simples para validar email
  const isValid = /^[^s@]+@[^s@]+.[^s@]+$/.test(newValue);

  if (!isValid) {
    console.log("Email inválido!");
  } else {
    console.log("Email válido, continuar login:", newValue);
  }
}
],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
padding: 10,
margimBottom: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Password`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
width: '106%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
	placeholder: 'Digite sua senha',
	secureTextEntry: "$var_sc.A0.toggles.password"
}`],

          stylesArray: [`{
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
padding: 10,
width: '100%',
}`],

          path: [`sc.a0.login.forms.password`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
	width: '20px',
	height: '20px',
	alignItems: 'center',
        right: '35px',
        top: '13px',

}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const path = "sc.A0.toggles.password";
  const currState = tools.getCtData(path);
  tools.functions.setVar({
		args: '',
		pass: { keyPath: [path], value: [!currState] },
	});
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M12 6c-3.233 0-6.04 2.31-7.795 5.796l-.068.136a1.836 1.836 0 0 0-.032.068l.032.068.068.136C5.96 15.69 8.767 18 12 18c3.233 0 6.04-2.31 7.795-5.796l.068-.136.032-.068a1.847 1.847 0 0 0-.032-.068l-.068-.136C18.04 8.31 15.233 6 12 6Zm-9.582 4.896C4.358 7.044 7.72 4 12 4c4.28 0 7.642 3.044 9.581 6.896l.022.043c.091.18.21.412.262.7a2.1 2.1 0 0 1 0 .723 2.525 2.525 0 0 1-.284.742C19.641 16.956 16.281 20 12 20c-4.28 0-7.642-3.044-9.582-6.896l-.021-.043c-.091-.18-.21-.412-.262-.7a2.098 2.098 0 0 1 0-.723c.053-.287.17-.519.262-.7l.021-.042ZM12 10a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-4 2a4 4 0 1 1 8 0 4 4 0 0 1-8 0Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12 6C8.76722 6 5.95965 8.31059 4.2048 11.7955C4.17609 11.8526 4.15483 11.8948 4.1369 11.9316C4.12109 11.964 4.11128 11.9853 4.10486 12C4.11128 12.0147 4.12109 12.036 4.1369 12.0684C4.15483 12.1052 4.17609 12.1474 4.2048 12.2045C5.95965 15.6894 8.76722 18 12 18C15.2328 18 18.0404 15.6894 19.7952 12.2045C19.8239 12.1474 19.8452 12.1052 19.8631 12.0684C19.8789 12.036 19.8888 12.0147 19.8952 12C19.8888 11.9853 19.8789 11.964 19.8631 11.9316C19.8452 11.8948 19.8239 11.8526 19.7952 11.7955C18.0404 8.31059 15.2328 6 12 6ZM2.41849 10.896C4.35818 7.04403 7.7198 4 12 4C16.2802 4 19.6419 7.04403 21.5815 10.896C21.5886 10.91 21.5958 10.9242 21.6032 10.9389C21.6945 11.119 21.8124 11.3515 21.8652 11.6381C21.9071 11.8661 21.9071 12.1339 21.8652 12.3619C21.8124 12.6485 21.6945 12.8811 21.6032 13.0611C21.5958 13.0758 21.5886 13.09 21.5815 13.104C19.6419 16.956 16.2802 20 12 20C7.7198 20 4.35818 16.956 2.41849 13.104C2.41148 13.09 2.40424 13.0758 2.39682 13.0611C2.3055 12.881 2.18759 12.6485 2.13485 12.3619C2.09291 12.1339 2.09291 11.8661 2.13485 11.6381C2.18759 11.3515 2.3055 11.119 2.39682 10.9389C2.40424 10.9242 2.41148 10.91 2.41849 10.896ZM12 10C10.8954 10 10 10.8954 10 12C10 13.1046 10.8954 14 12 14C13.1046 14 14 13.1046 14 12C14 10.8954 13.1046 10 12 10ZM8.00002 12C8.00002 9.79086 9.79088 8 12 8C14.2092 8 16 9.79086 16 12C16 14.2091 14.2092 16 12 16C9.79088 16 8.00002 14.2091 8.00002 12Z" fill="#0F1729"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#ccc`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.adm.login.message`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '95%',
padding: 12,
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(callback) => {
  const provider = new GoogleAuthProvider();

  signInWithPopup(auth, provider)
    .then(async result => {
      const user = result.user;
      console.log("Login Google:", user.email);

      // Salvar no Firestore (se não existir)
      const userDoc = await db.collection("users").doc(user.uid).get();
      if (!userDoc.exists) {
        await db.collection("users").doc(user.uid).set({
          email: user.email,
          createdAt: new Date()
        });
      }

      // Salvar no contexto
      tools.functions.setVar({
        args: "",
        pass: {
          keyPath: ["sc.session.user"],
          value: [{ email: user.email, uid: user.uid }]
        }
      });
    })
    .catch(err => {
      console.error("Erro Google Login:", err.message);
    });
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontWeight: 500,
fontSize: 14,
fontFamily: 'Inter',
}`
          ],

          children: [
            `Sign Up`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '5px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '95%',
padding: 12,
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const email = tools.getCtData("sc.a0.login.forms.email");
  const password = tools.getCtData("sc.a0.login.forms.password");
  const users = tools.getCtData("sc.adm.login.db.users") || [];

  const setMessage = (msg) => {
    tools.functions.setVar({
      args: '',
      pass: { keyPath: ["sc.adm.login.message"], value: [msg] }
    });
  };

  if (!email || email.trim() === "") {
    setMessage("Por favor, preencha o e-mail.");
    return;
  }

  if (!password || password.trim() === "") {
    setMessage("Por favor, preencha a senha.");
    return;
  }

  const userMatch = users.find(
    (user) => user.userEmail === email && user.userPassword === password
  );

  if (!userMatch) {
    setMessage("E-mail ou senha incorretos.");
    return;
  }

  const sessionPath = "sc.adm.session.user";
  const sessionData = { keyPath: [sessionPath], value: [userMatch] };
  tools.functions.setVar({ args: "", pass: sessionData });

  setMessage("Login realizado com sucesso!");

  tools.goTo("a1AdmDash");

setMessage("");
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontWeight: 500,
fontSize: 14,
fontFamily: 'Inter',
}`
          ],

          children: [
            `Login`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`users`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.login.db.users`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a1AdmDash",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDashMOBILE");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
padding: 10,
borderRadius: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
flexDirection: 'row',
flexWrap: 'wrap',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 20,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: "328px",
height: "187px", 
marginTop: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'Row',
width: '100%',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'left',
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '600',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Total Sales`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '5px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
fontSize: 12,
fontFamily: 'Inter',
color: "#5C5F6A",
fontWeight: '500',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: '#5C5F6A',
}`
          ],

          children: [
            `THIS MONTH`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '75px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 20,
fontWeight: '700',
fontFamily: 'Inter',
}`
          ],

          children: [
            `$ 4,235`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '57px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={274}
    height={46}
    viewBox="0 0 274 46"
    {...props}
  >
    <Path
      fill="#4078FF"
      d="M0 19h4v27H0V19ZM10 4h4v42h-4V4ZM20 9h4v37h-4V9ZM30 0h4v46h-4V0ZM40 6h4v40h-4V6ZM50 14h4v32h-4V14ZM60 32h4v14h-4V32ZM70 6h4v40h-4V6ZM80 9h4v37h-4V9ZM90 21h4v25h-4V21ZM100 32h4v14h-4V32ZM110 23h4v23h-4V23ZM120 14h4v32h-4V14ZM130 4h4v42h-4V4ZM140 0h4v46h-4V0ZM150 6h4v40h-4V6ZM160 14h4v32h-4V14ZM170 0h4v46h-4V0ZM180 14h4v32h-4V14ZM190 9h4v37h-4V9ZM200 4h4v42h-4V4ZM210 17h4v29h-4V17ZM220 6h4v40h-4V6ZM230 9h4v37h-4V9ZM240 17h4v29h-4V17ZM250 9h4v37h-4V9ZM260 26h4v20h-4V26ZM270 17h4v29h-4V17Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="274" height="46" viewBox="0 0 274 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19H4V46H0V19Z" fill="#4078FF"/>
<path d="M10 4H14V46H10V4Z" fill="#4078FF"/>
<path d="M20 9H24V46H20V9Z" fill="#4078FF"/>
<path d="M30 0H34V46H30V0Z" fill="#4078FF"/>
<path d="M40 6H44V46H40V6Z" fill="#4078FF"/>
<path d="M50 14H54V46H50V14Z" fill="#4078FF"/>
<path d="M60 32H64V46H60V32Z" fill="#4078FF"/>
<path d="M70 6H74V46H70V6Z" fill="#4078FF"/>
<path d="M80 9H84V46H80V9Z" fill="#4078FF"/>
<path d="M90 21H94V46H90V21Z" fill="#4078FF"/>
<path d="M100 32H104V46H100V32Z" fill="#4078FF"/>
<path d="M110 23H114V46H110V23Z" fill="#4078FF"/>
<path d="M120 14H124V46H120V14Z" fill="#4078FF"/>
<path d="M130 4H134V46H130V4Z" fill="#4078FF"/>
<path d="M140 0H144V46H140V0Z" fill="#4078FF"/>
<path d="M150 6H154V46H150V6Z" fill="#4078FF"/>
<path d="M160 14H164V46H160V14Z" fill="#4078FF"/>
<path d="M170 0H174V46H170V0Z" fill="#4078FF"/>
<path d="M180 14H184V46H180V14Z" fill="#4078FF"/>
<path d="M190 9H194V46H190V9Z" fill="#4078FF"/>
<path d="M200 4H204V46H200V4Z" fill="#4078FF"/>
<path d="M210 17H214V46H210V17Z" fill="#4078FF"/>
<path d="M220 6H224V46H220V6Z" fill="#4078FF"/>
<path d="M230 9H234V46H230V9Z" fill="#4078FF"/>
<path d="M240 17H244V46H240V17Z" fill="#4078FF"/>
<path d="M250 9H254V46H250V9Z" fill="#4078FF"/>
<path d="M260 26H264V46H260V26Z" fill="#4078FF"/>
<path d="M270 17H274V46H270V17Z" fill="#4078FF"/>
</svg>
      `,

      altura: "46px",

      largura: "274px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 20,
height: 20,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 20,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: "328px",
height: "187px", 
marginTop: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'Row',
width: '100%',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'left',
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '600',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
fontSize: 12,
fontFamily: 'Inter',
color: "#5C5F6A",
fontWeight: '500',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: '#5C5F6A',
}`
          ],

          children: [
            `THIS MONTH`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '75px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 20,
fontWeight: '700',
fontFamily: 'Inter',
}`
          ],

          children: [
            `2,571`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '65px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={265}
    height={47}
    viewBox="0 0 265 47"
    {...props}
  >
    <Path
      stroke="#4078FF"
      strokeWidth={1.5}
      d="m1.5 45.672 9.069-13.308 9.069-27.927 9.069 38.892 9.069.843 9.069-2.811L55.914 2l9.069 8.575 9.069 15.698L83.12 8.56 92.19 7.39l9.069 16.4 9.069-2.155 9.069 5.248 9.069-10.075 9.068 24.554 9.069-34.113 9.069 27.834 9.069-25.07 9.069 3.234 9.069 17.103 9.069 4.686 9.069.328 9.069 3.608 9.069-22.82 9.069 19.868 9.069-7.029 9.069-23.757 9.069 39.314L264.5 46"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="265" height="47" viewBox="0 0 265 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 45.672L10.569 32.3642L19.6379 4.43663L28.7069 43.3291L37.7759 44.1725L46.8448 41.361L55.9138 2L64.9828 10.5751L74.0517 26.2726L83.1207 8.56017L92.1897 7.38871L101.259 23.7891L110.328 21.6337L119.397 26.8818L128.466 16.8072L137.534 41.361L146.603 7.24814L155.672 35.082L164.741 10.0128L173.81 13.246L182.879 30.3493L191.948 35.0351L201.017 35.3632L210.086 38.9712L219.155 16.1512L228.224 36.0192L237.293 28.9904L246.362 5.23323L255.431 44.5474L264.5 46" stroke="#4078FF" stroke-width="1.5"/>
</svg>
      `,

      altura: "44px",

      largura: "263px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 20,
height: 20,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 20,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: "328px",
height: "187px", 
marginTop: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'Row',
width: '100%',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'left',
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '600',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
fontSize: 12,
fontFamily: 'Inter',
color: "#5C5F6A",
fontWeight: '500',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: '#5C5F6A',
}`
          ],

          children: [
            `MONTHLY GOALS : 1,000`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '50px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 20,
fontWeight: '700',
fontFamily: 'Inter',
}`
          ],

          children: [
            `734`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '82px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: "#5C5F6A",
paddingBottom: 3,
}`
          ],

          children: [
            `266 Left`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={272}
    height={8}
    fill="red"
    viewBox="0 0 272 8"
    {...props}
  >
    <Rect width={272} height={8} fill="#F0F1FF" rx={4} />
    <Rect width={221} height={8} fill="#4078FF" rx={4} />
  </Svg>)
      },

      svgOriginal: `
        <svg width="272" height="8" viewBox="0 0 272 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="272" height="8" rx="4" fill="#F0F1FF"/>
<rect width="221" height="8" rx="4" fill="#4078FF"/>
</svg>

      `,

      altura: "8px",

      largura: "272px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
flexDirection: 'row',
flexWrap: 'wrap',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
padding: 20,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: "328px",
height: "475px", 
marginTop: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: 'transparent',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '600',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Best Selling`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
fontSize: 12,
fontFamily: 'Inter',
color: "#5C5F6A",
fontWeight: '500',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: '#5C5F6A',
}`
          ],

          children: [
            `THIS MONTH`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '20px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '20px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 20,
fontWeight: '700',
fontFamily: 'Inter',
}`
          ],

          children: [
            `$ 2,400`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontFamily: 'Inter',
color: "#5C5F6A",
fontWeight: '500',
}`
          ],

          children: [
            `—`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontFamily: 'Inter',
color: "#5C5F6A",
fontWeight: '500',
}`
          ],

          children: [
            `Total Sales`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '20px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 16,
paddingVertical: 2,
flexDirection: 'row',
justifyContent: 'space-evenly',
borderWidth: 1,
borderRadius: 12,
borderColor: '#E6E7E8',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#5C5F6A',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `Classic Monochrome Tees`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#5C5F6A',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `—`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#0E1422',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `$ 940 Sales`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 16,
paddingVertical: 2,
flexDirection: 'row',
justifyContent: 'space-evenly',
borderWidth: 1,
borderRadius: 12,
borderColor: '#E6E7E8',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#5C5F6A',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `Monochromatic Wardrobe`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#5C5F6A',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `—`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#0E1422',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `$790 Sales`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: 15,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
paddingHorizontal: 16,
paddingVertical: 2,
flexDirection: 'row',
justifyContent: 'space-evenly',
borderWidth: 1,
borderRadius: 12,
borderColor: '#E6E7E8',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#5C5F6A',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `Classic Monochrome Tees`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#5C5F6A',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `—`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
	color: '#0E1422',
	fontSize: 12,
	fontWeight: '500',
	fontFamily: 'Inter',
}`
          ],

          children: [
            `$ 940 Sales`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '20px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[
              {
                height: "50px",
                width: "80px",
                backgroundColor: "#FDFDFD",
                borderWidth: 2,
                borderColor: "#EEE"
              }
              ],

      URIvariablePath:[``],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 20,
height: 20,
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 20,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: "328px",
height: "187px", 
marginTop: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
flexDirection: 'row',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 'auto',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
}`
          ],

          children: [
            `Recent Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{width: '5px',}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '80px',
padding: 5,
borderRadius: 16,
alignItems: 'center',
backgroundColor: '#eee',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `View All`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Item`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Date`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Total`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Status`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a1AdmDashMOBILE",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '25px',
paddingVertical: '25px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: 'transparent',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
alignItems: 'center',
padding: 10,
borderRadius: 10,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 15,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'Row',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'left',
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '600',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Total Sales`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: '#5C5F6A',
}`
          ],

          children: [
            `THIS MONTH`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '75px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 20,
fontWeight: '700',
fontFamily: 'Inter',
}`
          ],

          children: [
            `$ 4,235`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={274}
    height={46}
    viewBox="0 0 274 46"
    {...props}
  >
    <Path
      fill="#4078FF"
      d="M0 19h4v27H0V19ZM10 4h4v42h-4V4ZM20 9h4v37h-4V9ZM30 0h4v46h-4V0ZM40 6h4v40h-4V6ZM50 14h4v32h-4V14ZM60 32h4v14h-4V32ZM70 6h4v40h-4V6ZM80 9h4v37h-4V9ZM90 21h4v25h-4V21ZM100 32h4v14h-4V32ZM110 23h4v23h-4V23ZM120 14h4v32h-4V14ZM130 4h4v42h-4V4ZM140 0h4v46h-4V0ZM150 6h4v40h-4V6ZM160 14h4v32h-4V14ZM170 0h4v46h-4V0ZM180 14h4v32h-4V14ZM190 9h4v37h-4V9ZM200 4h4v42h-4V4ZM210 17h4v29h-4V17ZM220 6h4v40h-4V6ZM230 9h4v37h-4V9ZM240 17h4v29h-4V17ZM250 9h4v37h-4V9ZM260 26h4v20h-4V26ZM270 17h4v29h-4V17Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="274" height="46" viewBox="0 0 274 46" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M0 19H4V46H0V19Z" fill="#4078FF"/>
<path d="M10 4H14V46H10V4Z" fill="#4078FF"/>
<path d="M20 9H24V46H20V9Z" fill="#4078FF"/>
<path d="M30 0H34V46H30V0Z" fill="#4078FF"/>
<path d="M40 6H44V46H40V6Z" fill="#4078FF"/>
<path d="M50 14H54V46H50V14Z" fill="#4078FF"/>
<path d="M60 32H64V46H60V32Z" fill="#4078FF"/>
<path d="M70 6H74V46H70V6Z" fill="#4078FF"/>
<path d="M80 9H84V46H80V9Z" fill="#4078FF"/>
<path d="M90 21H94V46H90V21Z" fill="#4078FF"/>
<path d="M100 32H104V46H100V32Z" fill="#4078FF"/>
<path d="M110 23H114V46H110V23Z" fill="#4078FF"/>
<path d="M120 14H124V46H120V14Z" fill="#4078FF"/>
<path d="M130 4H134V46H130V4Z" fill="#4078FF"/>
<path d="M140 0H144V46H140V0Z" fill="#4078FF"/>
<path d="M150 6H154V46H150V6Z" fill="#4078FF"/>
<path d="M160 14H164V46H160V14Z" fill="#4078FF"/>
<path d="M170 0H174V46H170V0Z" fill="#4078FF"/>
<path d="M180 14H184V46H180V14Z" fill="#4078FF"/>
<path d="M190 9H194V46H190V9Z" fill="#4078FF"/>
<path d="M200 4H204V46H200V4Z" fill="#4078FF"/>
<path d="M210 17H214V46H210V17Z" fill="#4078FF"/>
<path d="M220 6H224V46H220V6Z" fill="#4078FF"/>
<path d="M230 9H234V46H230V9Z" fill="#4078FF"/>
<path d="M240 17H244V46H240V17Z" fill="#4078FF"/>
<path d="M250 9H254V46H250V9Z" fill="#4078FF"/>
<path d="M260 26H264V46H260V26Z" fill="#4078FF"/>
<path d="M270 17H274V46H270V17Z" fill="#4078FF"/>
</svg>
      `,

      altura: "46px",

      largura: "200px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 15,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'Row',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'left',
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '600',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: '#5C5F6A',
}`
          ],

          children: [
            `THIS MONTH`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '75px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 20,
fontWeight: '700',
fontFamily: 'Inter',
}`
          ],

          children: [
            `2,571`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={265}
    height={47}
    viewBox="0 0 265 47"
    {...props}
  >
    <Path
      stroke="#4078FF"
      strokeWidth={1.5}
      d="m1.5 45.672 9.069-13.308 9.069-27.927 9.069 38.892 9.069.843 9.069-2.811L55.914 2l9.069 8.575 9.069 15.698L83.12 8.56 92.19 7.39l9.069 16.4 9.069-2.155 9.069 5.248 9.069-10.075 9.068 24.554 9.069-34.113 9.069 27.834 9.069-25.07 9.069 3.234 9.069 17.103 9.069 4.686 9.069.328 9.069 3.608 9.069-22.82 9.069 19.868 9.069-7.029 9.069-23.757 9.069 39.314L264.5 46"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="265" height="47" viewBox="0 0 265 47" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1.5 45.672L10.569 32.3642L19.6379 4.43663L28.7069 43.3291L37.7759 44.1725L46.8448 41.361L55.9138 2L64.9828 10.5751L74.0517 26.2726L83.1207 8.56017L92.1897 7.38871L101.259 23.7891L110.328 21.6337L119.397 26.8818L128.466 16.8072L137.534 41.361L146.603 7.24814L155.672 35.082L164.741 10.0128L173.81 13.246L182.879 30.3493L191.948 35.0351L201.017 35.3632L210.086 38.9712L219.155 16.1512L228.224 36.0192L237.293 28.9904L246.362 5.23323L255.431 44.5474L264.5 46" stroke="#4078FF" stroke-width="1.5"/>
</svg>
      `,

      altura: "46px",

      largura: "200px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 15,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'Row',
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'left',
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 16,
fontWeight: '600',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: '#5C5F6A',
}`
          ],

          children: [
            `MONTHLY GOALS : 1,000`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '50px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 20,
fontWeight: '700',
fontFamily: 'Inter',
}`
          ],

          children: [
            `734`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '45px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 12,
fontFamily: 'Inter',
color: "#5C5F6A",
paddingBottom: 3,
}`
          ],

          children: [
            `266 Left`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={272}
    height={8}
    fill="red"
    viewBox="0 0 272 8"
    {...props}
  >
    <Rect width={272} height={8} fill="#F0F1FF" rx={4} />
    <Rect width={221} height={8} fill="#4078FF" rx={4} />
  </Svg>)
      },

      svgOriginal: `
        <svg width="272" height="8" viewBox="0 0 272 8" fill="none" xmlns="http://www.w3.org/2000/svg">
<rect width="272" height="8" rx="4" fill="#F0F1FF"/>
<rect width="221" height="8" rx="4" fill="#4078FF"/>
</svg>

      `,

      altura: "8px",

      largura: "272px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 15,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
backgroundColor: '#FFF',
alignItems: 'center',
padding: 15,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
width: '100%',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
flexDirection: 'row',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: 'auto',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '700',
}`
          ],

          children: [
            `Recent Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{width: '5px',}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '80px',
padding: 5,
borderRadius: 16,
alignItems: 'center',
backgroundColor: '#eee',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `View All`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Item`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Date`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Total`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Status`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a2AdmProducts",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '124px',
height: '40px',
paddingHorizontal: '20px',
paddingVertical: '12px',
backgroundColor: '#000',
borderRadius: 4,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a3AdmAddProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Add product`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '16px', }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
justifyContent: 'initial',
alignItems: 'center',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopLeftRadius: 5,
borderBottomLeftRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
 functions.firebase.where({ args, pass:{

  arrRefStrings: [`productsEcommerce`],
 arrWhere: [(...args) =>
        functions.firebase.whereConds({ args, pass:{
          arrStrings: [
        `label`, 
        `==`, `$var_sc.a2.selectedLabel`],
        }})],
 arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a2.list`],
          value: [`$arg_callback`]
        }})],
 }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.02 13.5-3.75-3.75m1.59-3.83a5.42 5.42 0 1 1-10.84 0 5.42 5.42 0 0 1 10.84 0Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.02 13.5L10.27 9.75M11.86 5.92C11.86 8.91338 9.43334 11.34 6.43996 11.34C3.44658 11.34 1.01996 8.91338 1.01996 5.92C1.01996 2.92662 3.44658 0.5 6.43996 0.5C9.43334 0.5 11.86 2.92662 11.86 5.92Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
 placeholder: 'Search products',
}`],

          stylesArray: [`{
borderTopWidth: 1,
borderBottomWidth: 1,
borderColor: '#eee',
padding: 10,
}`],

          path: [`sc.a2.selectedLabel`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a2.selectedLabel`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopRightRadius: 5,
borderBottomRightRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`productsEcommerce`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a2.list`],
          value: [`$arg_callback`]
        }})],
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a2.selectedLabel`],
          value: [` `]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#ccc`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '44px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', left: '14px', }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const list = tools.getCtData("sc.a2.list");
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a2.originalList"],
      value: [list]
    }
  });

 const list2 = tools.getCtData("sc.a2.originalList") || [];
  const sortField = tools.getCtData("sc.a2.sortField");
  const ascending = tools.getCtData("sc.a2.sortAsc");

  if (!sortField) return;

  const sortedList = [...list].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue < bValue) return ascending ? -1 : 1;
    if (aValue > bValue) return ascending ? 1 : -1;
    return 0;
  });

  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a2.list"],
      value: [sortedList]
    }
  });

const currentField = tools.getCtData("sc.a2.sortField");
  const currentAsc = tools.getCtData("sc.a2.sortAsc");

  const newField = "price"; // change to your field
  const newAsc = currentField === newField ? !currentAsc : true;

  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a2.sortField", "sc.a2.sortAsc"],
      value: [newField, newAsc]
    }
  });

  tools.functions.run("sortProducts"); // name of the sorting function above

}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#474B57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.143}
      d="M6 8.309 8.375 6m0 0 2.377 2.307M8.375 6l.004 12M18 15.692 15.624 18m0 0-2.377-2.308M15.625 18V6"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.3087L8.37549 6.00035M8.37549 6.00035L10.7525 8.30726M8.37549 6.00035L8.37935 18M18 15.692L15.6238 17.9997M15.6238 17.9997L13.2475 15.692M15.6238 17.9997V6" stroke="#474B57" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  // Pega a lista atual
  const list = tools.getCtData("sc.a2.list") || [];

  // Ordena pela propriedade 'label'
  const sortedList = [...list].sort((a, b) => {
    const valA = (a.label || "").toString().toLowerCase();
    const valB = (b.label || "").toString().toLowerCase();
    return valA.localeCompare(valB);
  });

  // Atualiza a variável com a lista ordenada
  tools.functions.setVar({
    pass: {
      keyPath: ["sc.a2.list"],
      value: sortedList
    }
  });

  // Debug: veja o resultado logo depois de setar
	console.log("✅ Sorted list set in sc.a2.list:", sortedList);
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `SKU`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const currentField = tools.getCtData("sc.a2.sortField");
  const currentAsc = tools.getCtData("sc.a2.sortAsc");

  const newField = "price"; // change to your field
  const newAsc = currentField === newField ? !currentAsc : true;

  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a2.sortField", "sc.a2.sortAsc"],
      value: [newField, newAsc]
    }
  })
}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Price`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Stock`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Categories`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Action`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a2.list`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '48px',
height: '48px',
}],

      URIvariablePath:[`$arg_image`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_sku`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_price`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on init'
}})],            childrenItems:[

 (...args:any) => <Elements.Custom pass={{
  arrItems: [() => {
const item = tools.findFlatItem(args);
const isAvailable =  item.stock;
return (
  <span style={{ color: isAvailable === "In Stock" ? "green" : "red" }}>
    {isAvailable}
  </span>
)
}] 
}}/>
],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_categories`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product`],
          value: [`$arg_item`]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a4AdmEditProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      fill="#fff"
      d="m8.02 9-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
    <Path
      fill="#fff"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"
    />
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3m3 7-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [
        `productsEcommerce`, `$arg_docId`],
   arrFuncs: [() => {}],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="red"
    viewBox="0 0 14 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 3.5h12m-8.5 0V3a2.5 2.5 0 1 1 5 0v.5m-4 2V11m3-5.5V11m-6-7.5h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.5H13M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5M5.5 5.5V11M8.5 5.5V11M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`productsEcommerce`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a2.list`],
          value: [`$arg_callback`]
        }})],
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a2.originalList`],
          value: [`sc.a2.list`]
        }}), () => {
  const list = tools.getCtData("sc.a2.originalList") || [];
  const sortField = tools.getCtData("sc.a2.sortField");
  const ascending = tools.getCtData("sc.a2.sortAsc");

  if (!sortField) return;

  const sortedList = [...list].sort((a, b) => {
    const aValue = a[sortField];
    const bValue = b[sortField];

    if (aValue < bValue) return ascending ? -1 : 1;
    if (aValue > bValue) return ascending ? 1 : -1;
    return 0;
  });

  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a2.list"],
      value: [sortedList]
    }
  });
}]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a3AdmAddProducts",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Add Product`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Add Product`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
paddingVertical: 20,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Label`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a3.iptsChanges.label`],

          funcsArray: [
        (callback) => {
  // Pegar o valor digitado
  let newValue = callback.trim();

  // Atualizar a variável no Flaxboll
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.iptsChanges.label"],
      value: [newValue]
    }
  });

  // Verificar se está vazio
  if (newValue === "") {
    // Salvar mensagem de aviso
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.labelMessage"],
        value: ["O campo Label não pode estar vazio."]
      }
    });
  } else {
    // Limpar mensagem caso seja válido
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.labelMessage"],
        value: [""]
      }
    });
  }

  console.log("Label digitado:", newValue);
}
, () => {
  // Lista de variáveis a verificar
  const requiredFields = [
    "sc.a3.iptsChanges.label",
    "sc.a3.iptsChanges.price",
    "sc.a3.iptsChanges.categories",
    "sc.a3.iptsChanges.slug",
    "sc.a3.iptsChanges.sku",
    "sc.a3.iptsChanges.description",
    "sc.a3.iptsChanges.stock",
    "sc.a3.iptsChanges.availableQuantity"
  ];

  // Função auxiliar para pegar valor 
  const getVal = (path) => tools.getCtData(path);

  // Verificar se todas têm valor
  const allFilled = requiredFields.every(path => {
    const value = getVal(path);
    return value !== undefined && value !== null && value !== "";
  });

  // Salvar resultado em outra variável
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.allFieldsFilled"],
      value: [allFilled]
    }
  });

  console.log("Campos preenchidos?", allFilled);
}
],

          args,
        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.a3.labelMessage`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Price`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a3.iptsChanges.price`],

          funcsArray: [(txt) => {
  try {
    if (typeof txt !== "string") txt = String(txt ?? "");

    // Mantém apenas números (sem regex)
    let clean = "";
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i];
      if (ch >= "0" && ch <= "9") clean += ch;
    }

    // Remove zeros à esquerda (mas deixa pelo menos um)
    clean = clean.replace(/^0+/, "");
    if (clean.length === 0) clean = "0";

    // Constrói centavos e separadores
    let intPart = clean.slice(0, -2);
    let cents = clean.slice(-2);

    // Se tiver só um dígito, considera como "0X"
    if (clean.length === 1) {
      intPart = "0";
      cents = "0" + clean;
    }

    // Se tiver dois dígitos, é "XX" => 0,XX
    if (clean.length === 2) {
      intPart = "0";
      cents = clean;
    }

    // Formata milhares manualmente (sem regex)
    let intFormatted = "";
    let counter = 0;

    for (let i = intPart.length - 1; i >= 0; i--) {
      intFormatted = intPart[i] + intFormatted;
      counter++;
      if (counter === 3 && i > 0) {
        intFormatted = "." + intFormatted;
        counter = 0;
      }
    }

    const masked = "R$ " + intFormatted + "," + cents;

    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.iptsChanges.price"],
        value: [String(masked)],
      },
    });
  } catch (e) {
    console.error("Erro na máscara BRL:", e);
    return txt;
  }
}],

          args,
        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.a3.priceMessage`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Category`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a3.iptsChanges.categories`],

          funcsArray: [(callback) => {
  // Pegar o valor digitado
  let newValue = callback.trim();

  // Atualizar a variável no Flaxboll
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.iptsChanges.categories"],
      value: [newValue]
    }
  });

  // Verificar se está vazio
  if (newValue === "") {
    // Salvar mensagem de aviso
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.categoryMessage"],
        value: ["O campo não pode estar vazio."]
      }
    });
  } else {
    // Limpar mensagem caso seja válido
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.categoryMessage"],
        value: [""]
      }
    });
  }

  console.log("Entrada digitada:", newValue);
}
],

          args,
        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.a3.categoryMessage`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Slug`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a3.iptsChanges.slug`],

          funcsArray: [(callback) => {
  // Pegar o valor digitado
  let newValue = callback.trim();

  // Atualizar a variável no Flaxboll
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.iptsChanges.slug"],
      value: [newValue]
    }
  });

  // Verificar se está vazio
  if (newValue === "") {
    // Salvar mensagem de aviso
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.slugMessage"],
        value: ["O campo não pode estar vazio."]
      }
    });
  } else {
    // Limpar mensagem caso seja válido
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.slugMessage"],
        value: [""]
      }
    });
  }

  console.log("Entrada digitada:", newValue);
}
],

          args,
        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.a3.slugMessage`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `SKU`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a3.iptsChanges.sku`],

          funcsArray: [(callback) => {
  // Remove tudo que não seja alfanumérico
  let newValue = callback.replace(/[^a-zA-Z0-9]/g, "");

  // Atualizar a variável no Flaxboll
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.iptsChanges.sku"],
      value: [newValue]
    }
  });

  // Verificar se existe algum caractere válido
  if (newValue === "" || !/[a-zA-Z0-9]/.test(newValue)) {
    // Salvar mensagem de aviso
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.skuMessage"],
        value: ["SKU inválido."]
      }
    });
  } else {
    // Limpar mensagem caso o valor seja válido
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.skuMessage"],
        value: [""]
      }
    });
  }

  console.log("SKU digitado:", newValue);
}
],

          args,
        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.a3.skuMessage`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Description`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Adicione uma descrição',
multiline: 'true',
}`],

          stylesArray: [`{
width: '80%',
height: '128px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a3.iptsChanges.description`],

          funcsArray: [(callback) => {
  // Pegar o valor digitado
  let newValue = callback.trim();

  // Atualizar a variável no Flaxboll
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.iptsChanges.description"],
      value: [newValue]
    }
  });

  // Verificar se está vazio
  if (newValue === "") {
    // Salvar mensagem de aviso
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.descriptionMessage"],
        value: ["O campo não pode estar vazio."]
      }
    });
  } else {
    // Limpar mensagem caso seja válido
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.descriptionMessage"],
        value: [""]
      }
    });
  }

  console.log("Entrada digitada:", newValue);
}
],

          args,
        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.a3.descriptionMessage`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Stock status`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{ editable: false, }`],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
backgroundColor: '#E6E7E8',
}`],

          path: [`sc.a3.iptsChanges.stock`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a3.iptsChanges.stock`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Available quantity`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a3.iptsChanges.availableQuantity`],

          funcsArray: [(callback) => {
  // Remove tudo que não seja número, vírgula ou ponto
  let newValue = callback.replace(/[^0-9.,]/g, "");

  // Atualizar a variável do preço
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.iptsChanges.availableQuantity"],
      value: [newValue]
    }
  });

  // Verificar se existe algum número válido
  if (newValue === "" || !/[0-9]/.test(newValue)) {
    // Salvar mensagem de aviso
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.availableQuantityMessage"],
        value: ["O campo não pode estar vazio."]
      }
    });
  } else {
    // Limpar mensagem caso o valor seja válido
    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a3.availableQuantityMessage"],
        value: [""]
      }
    });
  }

  // Converter valor para número inteiro (ignora vírgula/ponto)
  let numericValue = parseInt(newValue.replace(/[^0-9]/g, ""), 10);

  if (!isNaN(numericValue)) {
    if (numericValue === 0) {
      tools.functions.setVar({
        args: "",
        pass: {
          keyPath: ["sc.a3.iptsChanges.stock"],
          value: ["Out of Stock"]
        }
			});
console.log("Estoque salvo: Out of Stock");

    } else if (numericValue > 0) {
      tools.functions.setVar({
        args: "",
        pass: {
          keyPath: ["sc.a3.iptsChanges.stock"],
          value: ["In Stock"]
        }
			});
console.log("Estoque salvo: In Stock");
    }
  }

  console.log("Entrada digitada:", newValue, " | Estoque:", numericValue);
}
],

          args,
        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
color: "red", 
marginTop: 8,
fontFamily: "Inter",
fontSize: 14,
}`
          ],

          children: [
            `$var_sc.a3.availableQuantityMessage`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Images`
          ],

          args,

        }}/>, 
        

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
	width: '200px',
	height:'200px',
	borderRadius: '6px',
	borderWidth: '1px',
	borderColor: '#e6e7e8',
}],

      URIvariablePath:[`sc.a3.previewUrl`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
alignItems: 'center',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#e6e7e8',
padding: 5,
flexDirection: 'row',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const input = document.createElement("input");
  input.type = "file";
  input.accept = "image/*";

  input.onchange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      console.log("Nenhum arquivo selecionado.");
      return;
    }

    // Criar o FileReader para converter em Base64
    const reader = new FileReader();
    reader.onloadend = () => {
      const base64 = reader.result; // DataURL (ex: "data:image/png;base64,....")

      // Salva o arquivo original
      tools.functions.setVar({
        args: "",
        pass: {
          keyPath: ["sc.a3.localFile"],
          value: [file]
        }
      });

      // Salva o DataURL para o preview
      tools.functions.setVar({
        args: "",
        pass: {
          keyPath: ["sc.a3.previewUrl"],
          value: [base64]
        }
      });

      console.log("Preview pronto:", base64.substring(0, 50) + "...");
    };

    reader.readAsDataURL(file); // Converte o arquivo em Base64
  };

  input.click();
}]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={18}
    height={17}
    fill="red"
    viewBox="0 0 18 17"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M4.808 16.286H2.412a1.198 1.198 0 0 1-1.198-1.198V5.506m0 0h15.572m-15.572 0 2.647-4.193A1.198 1.198 0 0 1 4.868.714h8.264a1.198 1.198 0 0 1 1.007.6l2.647 4.191m0 0v9.583a1.198 1.198 0 0 1-1.198 1.198h-2.396m-7.187-4.193L9 9.1m0 0 2.995 2.994M9 9.1v7.187M9 .714v4.791"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="18" height="17" viewBox="0 0 18 17" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M4.80769 16.2857H2.41209C2.09441 16.2857 1.78975 16.1595 1.56511 15.9349C1.34048 15.7103 1.21429 15.4056 1.21429 15.0879V5.5055M1.21429 5.5055H16.7857M1.21429 5.5055L3.86143 1.31318C3.96387 1.13559 4.11017 0.987268 4.28634 0.882406C4.46251 0.777545 4.66264 0.719655 4.86758 0.714279H13.1324C13.3374 0.719655 13.5375 0.777545 13.7137 0.882406C13.8898 0.987268 14.0362 1.13559 14.1386 1.31318L16.7857 5.5055M16.7857 5.5055V15.0879C16.7857 15.4056 16.6595 15.7103 16.4349 15.9349C16.2103 16.1595 15.9056 16.2857 15.5879 16.2857H13.1923M6.00545 12.0934L8.99996 9.09889M8.99996 9.09889L11.9945 12.0934M8.99996 9.09889L9.00004 16.2857M9.00004 0.714279V5.50549" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '10px', }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#878A92",
  paddingVertical: '5',
}`
          ],

          children: [
            `Upload Image`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a3.productImagesOptions`,

          itemElements: [
            (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `a`
          ],

          args,

        }}/>
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  // Lista de variáveis a verificar
  const requiredFields = [
    "sc.a3.iptsChanges.label",
    "sc.a3.iptsChanges.price",
    "sc.a3.iptsChanges.categories",
    "sc.a3.iptsChanges.slug",
    "sc.a3.iptsChanges.sku",
    "sc.a3.iptsChanges.description",
    "sc.a3.iptsChanges.stock",
    "sc.a3.iptsChanges.availableQuantity"
  ];

  // Função auxiliar para pegar valor 
  const getVal = (path) => tools.getCtData(path);

  // Verificar se todas têm valor
  const allFilled = requiredFields.every(path => {
    const value = getVal(path);
    return value !== undefined && value !== null && value !== "";
  });

  // Salvar resultado em outra variável
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.allFieldsFilled"],
      value: [allFilled]
    }
  });

  console.log("Campos preenchidos?", allFilled);
}
]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Teste`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[

 (...args:any) => <Elements.Custom pass={{
  arrItems: [() => {
  const storedDate = tools.getCtData("sc.a3.iptsChanges.date");

  // Força extrair sempre uma string
  let dateValue = "";
  if (Array.isArray(storedDate)) {
    dateValue = storedDate[0] || "";
  } else if (typeof storedDate === "string") {
    dateValue = storedDate;
  }

	return (
<div className="relative w-fit">
    <input
      type="date"
      //value={dateValue}
      onChange={(e) => {
        const selectedDate = e.target.value;

        tools.functions.setVar({
          args: "",
          pass: {
            keyPath: ["sc.a3.iptsChanges.date"],
            value: [selectedDate]
          }
        });

        console.log("📅 Data escolhida:", selectedDate);
	}}
	className="px-4 py-2 rounded-2xl border border-gray-300 shadow-sm focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition text-gray-700 appearance-none bg-white"
/>
	<span className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none">
</span>
</div>
  );
}] 
}}/>
],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
alignSelf: 'flex-start',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:[`{ disabled: '$var_sc.a3.allFieldsFilled', }`],

            styles:[
        `{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`, `{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
() => {
  // Lista de variáveis a verificar
  const requiredFields = [
    "sc.a3.iptsChanges.label",
    "sc.a3.iptsChanges.price",
    "sc.a3.iptsChanges.categories",
    "sc.a3.iptsChanges.slug",
    "sc.a3.iptsChanges.sku",
    "sc.a3.iptsChanges.description",
    "sc.a3.iptsChanges.stock",
    "sc.a3.iptsChanges.availableQuantity"
  ];

  // Função auxiliar para pegar valor 
  const getVal = (path) => tools.getCtData(path);

  // Verificar se todas têm valor
  const allFilled = requiredFields.every(path => {
    const value = getVal(path);
    return value !== undefined && value !== null && value !== "";
  });

  // Salvar resultado em outra variável
  tools.functions.setVar({
    args: "",
    pass: {
      keyPath: ["sc.a3.allFieldsFilled"],
      value: [allFilled]
    }
  });

  console.log("Campos preenchidos?", allFilled);
}
, 
async (...args) =>
 functions.firebase.uploadFileTool({ args, pass:{
 arrFiles: [`sc.a3.localFile`],
 arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a3.iptsChanges.image`],
          value: [`$arg_callback`]
        }})],
 }}), 
async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`productsEcommerce`],
            arrPathData: [`sc.a3.iptsChanges`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a3.iptsChanges`],
          value: [``]
        }})],
        }}), 

        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        , async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a3.previewUrl`],
          value: [``]
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Save Product`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a3.iptsChanges`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a3.previewUrl`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Cancel`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a3.allFieldsFilled`],
          value: [`false`]
        }}), () => {
  const db = tools.functions.firebase.firestore;
  const imagesRef = db.collection("images");

  imagesRef.get()
    .then(querySnapshot => {
      const urls = [];
      querySnapshot.forEach(doc => {
        const data = doc.data();
        if (data && data.url) urls.push(data.url);
      });

      // Salva a lista de URLs no Flaxboll
      tools.functions.setVar({
        args: "",
        pass: {
          keyPath: ["sc.a3.productImagesOptions"],
          value: [urls]
        }
      });

      console.log("Imagens carregadas (Firestore):", urls);
    })
    .catch(err => console.error("Erro ao buscar imagens do Firestore:", err));
}]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a4AdmEditProducts",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Edit Product`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Edit Product`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
paddingVertical: 20,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Label`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.label`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.label`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Price`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.price`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.price`],
          value: [`$arg_callback`]
        }}), (txt) => {
  try {
    if (typeof txt !== "string") txt = String(txt ?? "");

    // Mantém apenas números (sem regex)
    let clean = "";
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i];
      if (ch >= "0" && ch <= "9") clean += ch;
    }

    // Remove zeros à esquerda (mas deixa pelo menos um)
    clean = clean.replace(/^0+/, "");
    if (clean.length === 0) clean = "0";

    // Constrói centavos e separadores
    let intPart = clean.slice(0, -2);
    let cents = clean.slice(-2);

    // Se tiver só um dígito, considera como "0X"
    if (clean.length === 1) {
      intPart = "0";
      cents = "0" + clean;
    }

    // Se tiver dois dígitos, é "XX" => 0,XX
    if (clean.length === 2) {
      intPart = "0";
      cents = clean;
    }

    // Formata milhares manualmente (sem regex)
    let intFormatted = "";
    let counter = 0;

    for (let i = intPart.length - 1; i >= 0; i--) {
      intFormatted = intPart[i] + intFormatted;
      counter++;
      if (counter === 3 && i > 0) {
        intFormatted = "." + intFormatted;
        counter = 0;
      }
    }

    const masked = "R$ " + intFormatted + "," + cents;

    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a4.editData.product.price"],
        value: [String(masked)],
      },
    });
  } catch (e) {
    console.error("Erro na máscara BRL:", e);
    return txt;
  }
}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Category`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.categories`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.categories`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Slug`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.slug`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.slug`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `SKU`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.sku`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.sku`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Description`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: 'Adicione uma descrição',
multiline: 'true',
}`],

          stylesArray: [`{
width: '320px',
height: '128px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.description`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.description`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Stock status`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.stock`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.stock`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Available quantity`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a4.editData.product.availableQuantity`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a4.editData.product.availableQuantity`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Images`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
alignSelf: 'flex-start',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `productsEcommerce`, `$var_sc.a4.editData.product.docId`],
            arrPathData: [`$var_sc.a4.editData.product`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a4.editData.product`],
          value: [``]
        }})],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
}`
          ],

          children: [
            `Save Product`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a4.editData.product`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
}`
          ],

          children: [
            `Cancel`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const product = tools.getCtData("sc.a4.editData.product");
  console.log("Product data:", product);
}]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a5AdmOrders",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{width: '5px',}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '124px',
height: '40px',
paddingHorizontal: '20px',
paddingVertical: '12px',
backgroundColor: '#000',
borderRadius: 4,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5aAdmAddOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Add order`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '16px', }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
justifyContent: 'initial',
alignItems: 'center',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopLeftRadius: 5,
borderBottomLeftRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.02 13.5-3.75-3.75m1.59-3.83a5.42 5.42 0 1 1-10.84 0 5.42 5.42 0 0 1 10.84 0Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.02 13.5L10.27 9.75M11.86 5.92C11.86 8.91338 9.43334 11.34 6.43996 11.34C3.44658 11.34 1.01996 8.91338 1.01996 5.92C1.01996 2.92662 3.44658 0.5 6.43996 0.5C9.43334 0.5 11.86 2.92662 11.86 5.92Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
 placeholder: 'Search orders',
}`],

          stylesArray: [`{
borderTopWidth: 1,
borderBottomWidth: 1,
borderColor: '#eee',
padding: 10,
}`],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopRightRadius: 5,
borderBottomRightRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#ccc`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '44px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', left: '14px', }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#474B57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.143}
      d="M6 8.309 8.375 6m0 0 2.377 2.307M8.375 6l.004 12M18 15.692 15.624 18m0 0-2.377-2.308M15.625 18V6"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.3087L8.37549 6.00035M8.37549 6.00035L10.7525 8.30726M8.37549 6.00035L8.37935 18M18 15.692L15.6238 17.9997M15.6238 17.9997L13.2475 15.692M15.6238 17.9997V6" stroke="#474B57" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Order`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Date`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Total`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Status`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Action`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a5.list.orders`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '48px',
height: '48px',
}],

      URIvariablePath:[`$arg_image`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_order`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_date`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_total`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_status`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5b.editData.order`],
          value: [`$arg_item`]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5bAdmEditOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      fill="#fff"
      d="m8.02 9-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
    <Path
      fill="#fff"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"
    />
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3m3 7-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [
        `ordersEcommerce`, `$arg_docId`],
   arrFuncs: [() => {}],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="red"
    viewBox="0 0 14 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 3.5h12m-8.5 0V3a2.5 2.5 0 1 1 5 0v.5m-4 2V11m3-5.5V11m-6-7.5h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.5H13M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5M5.5 5.5V11M8.5 5.5V11M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`ordersEcommerce`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5.list.orders`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a5aAdmAddOrders",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Add Order`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Add Order`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
paddingVertical: 20,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Order`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5a.iptsChanges.order`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5a.iptsChanges.order`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Date`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5a.iptsChanges.date`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5a.iptsChanges.date`],
          value: [`$arg_callback`]
        }}), (txt) => {
  try {
    if (typeof txt !== "string") txt = String(txt ?? "");

    // Mantém apenas números (sem regex)
    let clean = "";
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i];
      if (ch >= "0" && ch <= "9") {
        clean += ch;
      }
    }

    // Limita a 8 dígitos (ddmmyyyy)
    if (clean.length > 8) clean = clean.slice(0, 8);

    console.log({ clean });

    // Monta máscara dd/mm/aaaa
    let masked = "";
    if (clean.length > 0) masked = clean.slice(0, 2);         // dd
    if (clean.length >= 3) masked += "/" + clean.slice(2, 4); // dd/mm
    if (clean.length >= 5) masked += "/" + clean.slice(4, 8); // dd/mm/aaaa

    console.log({ masked });

    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a5a.iptsChanges.date"],
        value: [String(masked)],
      },
    });
  } catch (e) {
    console.error("Erro na máscara de data:", e);
    return txt;
  }
}],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Total`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5a.iptsChanges.total`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5a.iptsChanges.total`],
          value: [`$arg_callback`]
        }}), (txt) => {
  try {
    if (typeof txt !== "string") txt = String(txt ?? "");

    // Mantém apenas números (sem regex)
    let clean = "";
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i];
      if (ch >= "0" && ch <= "9") clean += ch;
    }

    // Remove zeros à esquerda (mas deixa pelo menos um)
    clean = clean.replace(/^0+/, "");
    if (clean.length === 0) clean = "0";

    // Constrói centavos e separadores
    let intPart = clean.slice(0, -2);
    let cents = clean.slice(-2);

    // Se tiver só um dígito, considera como "0X"
    if (clean.length === 1) {
      intPart = "0";
      cents = "0" + clean;
    }

    // Se tiver dois dígitos, é "XX" => 0,XX
    if (clean.length === 2) {
      intPart = "0";
      cents = clean;
    }

    // Formata milhares manualmente (sem regex)
    let intFormatted = "";
    let counter = 0;

    for (let i = intPart.length - 1; i >= 0; i--) {
      intFormatted = intPart[i] + intFormatted;
      counter++;
      if (counter === 3 && i > 0) {
        intFormatted = "." + intFormatted;
        counter = 0;
      }
    }

    const masked = "R$ " + intFormatted + "," + cents;

    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a5a.iptsChanges.total"],
        value: [String(masked)],
      },
    });
  } catch (e) {
    console.error("Erro na máscara BRL:", e);
    return txt;
  }
}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Status`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5a.iptsChanges.status`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5a.iptsChanges.status`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
alignSelf: 'flex-start',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`ordersEcommerce`],
            arrPathData: [`sc.a5a.iptsChanges`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5a.iptsChanges`],
          value: [``]
        }})],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Save Order`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5a.iptsChanges`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Cancel`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a5bAdmEditOrders",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Edit Order`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Edit Order`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
paddingVertical: 20,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Order`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5b.editData.order.order`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5b.editData.order.order`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Date`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5b.editData.order.date`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5b.editData.order.date`],
          value: [`$arg_callback`]
        }}), (txt) => {
  try {
    if (typeof txt !== "string") txt = String(txt ?? "");

    // Mantém apenas números (sem regex)
    let clean = "";
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i];
      if (ch >= "0" && ch <= "9") {
        clean += ch;
      }
    }

    // Limita a 8 dígitos (ddmmyyyy)
    if (clean.length > 8) clean = clean.slice(0, 8);

    console.log({ clean });

    // Monta máscara dd/mm/aaaa
    let masked = "";
    if (clean.length > 0) masked = clean.slice(0, 2);         // dd
    if (clean.length >= 3) masked += "/" + clean.slice(2, 4); // dd/mm
    if (clean.length >= 5) masked += "/" + clean.slice(4, 8); // dd/mm/aaaa

    console.log({ masked });

    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a5b.editData.order.date"],
        value: [String(masked)],
      },
    });
  } catch (e) {
    console.error("Erro na máscara de data:", e);
    return txt;
  }
}],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Total`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5b.editData.order.total`],

          funcsArray: [
        async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5b.editData.order.total`],
          value: [`$arg_callback`]
        }}), (txt) => {
  try {
    if (typeof txt !== "string") txt = String(txt ?? "");

    // Mantém apenas números (sem regex)
    let clean = "";
    for (let i = 0; i < txt.length; i++) {
      const ch = txt[i];
      if (ch >= "0" && ch <= "9") clean += ch;
    }

    // Remove zeros à esquerda (mas deixa pelo menos um)
    clean = clean.replace(/^0+/, "");
    if (clean.length === 0) clean = "0";

    // Constrói centavos e separadores
    let intPart = clean.slice(0, -2);
    let cents = clean.slice(-2);

    // Se tiver só um dígito, considera como "0X"
    if (clean.length === 1) {
      intPart = "0";
      cents = "0" + clean;
    }

    // Se tiver dois dígitos, é "XX" => 0,XX
    if (clean.length === 2) {
      intPart = "0";
      cents = clean;
    }

    // Formata milhares manualmente (sem regex)
    let intFormatted = "";
    let counter = 0;

    for (let i = intPart.length - 1; i >= 0; i--) {
      intFormatted = intPart[i] + intFormatted;
      counter++;
      if (counter === 3 && i > 0) {
        intFormatted = "." + intFormatted;
        counter = 0;
      }
    }

    const masked = "R$ " + intFormatted + "," + cents;

    tools.functions.setVar({
      args: "",
      pass: {
        keyPath: ["sc.a5b.editData.order.total"],
        value: [String(masked)],
      },
    });
  } catch (e) {
    console.error("Erro na máscara BRL:", e);
    return txt;
  }
}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Status`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a5b.editData.order.status`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a5b.editData.order.status`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
alignSelf: 'flex-start',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `ordersEcommerce`, `$var_sc.a5.editData.order.docId`],
            arrPathData: [`$var_sc.a5.editData.order`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a5.editData.order`],
          value: [``]
        }})],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Save Product`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a5.editData.order`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Cancel`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const order = tools.getCtData("sc.a5b.editData.order");
  console.log("Order data:", order);
}]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a6AdmCustomers",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{width: '5px',}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
justifyContent: 'initial',
alignItems: 'center',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopLeftRadius: 5,
borderBottomLeftRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.02 13.5-3.75-3.75m1.59-3.83a5.42 5.42 0 1 1-10.84 0 5.42 5.42 0 0 1 10.84 0Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.02 13.5L10.27 9.75M11.86 5.92C11.86 8.91338 9.43334 11.34 6.43996 11.34C3.44658 11.34 1.01996 8.91338 1.01996 5.92C1.01996 2.92662 3.44658 0.5 6.43996 0.5C9.43334 0.5 11.86 2.92662 11.86 5.92Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
 placeholder: 'Search customers',
}`],

          stylesArray: [`{
borderTopWidth: 1,
borderBottomWidth: 1,
borderColor: '#eee',
padding: 10,
}`],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopRightRadius: 5,
borderBottomRightRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#ccc`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '44px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', left: '14px', }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#474B57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.143}
      d="M6 8.309 8.375 6m0 0 2.377 2.307M8.375 6l.004 12M18 15.692 15.624 18m0 0-2.377-2.308M15.625 18V6"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.3087L8.37549 6.00035M8.37549 6.00035L10.7525 8.30726M8.37549 6.00035L8.37935 18M18 15.692L15.6238 17.9997M15.6238 17.9997L13.2475 15.692M15.6238 17.9997V6" stroke="#474B57" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 50,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Email`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 70,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Shipping Address`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Action`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a6.list.customers`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '48px',
height: '48px',
}],

      URIvariablePath:[`$arg_initials`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 50,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_email`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 70,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_address`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      fill="#fff"
      d="m8.02 9-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
    <Path
      fill="#fff"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"
    />
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3m3 7-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [`customersEcommerce`],
   arrFuncs: [() => {}],
        }})]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="red"
    viewBox="0 0 14 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 3.5h12m-8.5 0V3a2.5 2.5 0 1 1 5 0v.5m-4 2V11m3-5.5V11m-6-7.5h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.5H13M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5M5.5 5.5V11M8.5 5.5V11M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`customersEcommerce`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a6.list.customers`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a7AdmReviews",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#0E1422" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{width: '5px',}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '124px',
height: '40px',
paddingHorizontal: '20px',
paddingVertical: '12px',
backgroundColor: '#000',
borderRadius: 4,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7aAdmAddReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Add review`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '16px', }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
justifyContent: 'initial',
alignItems: 'center',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopLeftRadius: 5,
borderBottomLeftRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.02 13.5-3.75-3.75m1.59-3.83a5.42 5.42 0 1 1-10.84 0 5.42 5.42 0 0 1 10.84 0Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.02 13.5L10.27 9.75M11.86 5.92C11.86 8.91338 9.43334 11.34 6.43996 11.34C3.44658 11.34 1.01996 8.91338 1.01996 5.92C1.01996 2.92662 3.44658 0.5 6.43996 0.5C9.43334 0.5 11.86 2.92662 11.86 5.92Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 
        (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
 placeholder: 'Search reviews',
}`],

          stylesArray: [`{
borderTopWidth: 1,
borderBottomWidth: 1,
borderColor: '#eee',
padding: 10,
}`],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
borderTopRightRadius: 5,
borderBottomRightRadius: 5,
padding: 11,
alignItem: 'center',
justifyContent: 'center',
borderColor: '#eee',
borderWidth: 1,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M5.293 5.293a1 1 0 0 1 1.414 0L12 10.586l5.293-5.293a1 1 0 1 1 1.414 1.414L13.414 12l5.293 5.293a1 1 0 0 1-1.414 1.414L12 13.414l-5.293 5.293a1 1 0 0 1-1.414-1.414L10.586 12 5.293 6.707a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M5.29289 5.29289C5.68342 4.90237 6.31658 4.90237 6.70711 5.29289L12 10.5858L17.2929 5.29289C17.6834 4.90237 18.3166 4.90237 18.7071 5.29289C19.0976 5.68342 19.0976 6.31658 18.7071 6.70711L13.4142 12L18.7071 17.2929C19.0976 17.6834 19.0976 18.3166 18.7071 18.7071C18.3166 19.0976 17.6834 19.0976 17.2929 18.7071L12 13.4142L6.70711 18.7071C6.31658 19.0976 5.68342 19.0976 5.29289 18.7071C4.90237 18.3166 4.90237 17.6834 5.29289 17.2929L10.5858 12L5.29289 6.70711C4.90237 6.31658 4.90237 5.68342 5.29289 5.29289Z" fill="#0F1729"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#ccc`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '44px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', left: '14px', }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#474B57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.143}
      d="M6 8.309 8.375 6m0 0 2.377 2.307M8.375 6l.004 12M18 15.692 15.624 18m0 0-2.377-2.308M15.625 18V6"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.3087L8.37549 6.00035M8.37549 6.00035L10.7525 8.30726M8.37549 6.00035L8.37935 18M18 15.692L15.6238 17.9997M15.6238 17.9997L13.2475 15.692M15.6238 17.9997V6" stroke="#474B57" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 220,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Review`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Action`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a7.list.reviews`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '48px',
height: '48px',
}],

      URIvariablePath:[`$arg_initials`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 220,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_review`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7b.editData.review`],
          value: [`$arg_item`]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7bAdmEditReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      fill="#fff"
      d="m8.02 9-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
    <Path
      fill="#fff"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"
    />
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3m3 7-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [
        `reviewsEcommerce`, `$arg_docId`],
   arrFuncs: [() => {}],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="red"
    viewBox="0 0 14 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 3.5h12m-8.5 0V3a2.5 2.5 0 1 1 5 0v.5m-4 2V11m3-5.5V11m-6-7.5h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.5H13M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5M5.5 5.5V11M8.5 5.5V11M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`reviewsEcommerce`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7.list.reviews`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a7aAdmAddReviews",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#0E1422" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Add Reviews`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Add Review`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
paddingVertical: 20,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '80%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a7a.iptsChanges.name`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7a.iptsChanges.name`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Review`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
width: '80%',
height: '128px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a7a.iptsChanges.review`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7a.iptsChanges.review`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
alignSelf: 'flex-start',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.setDocTool({ args, pass:{
  arrRefStrings: [`reviewsEcommerce`],
            arrPathData: [`sc.a7a.iptsChanges`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7a.iptsChanges`],
          value: [``]
        }})],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Save Review`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7a.iptsChanges`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Cancel`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a7bAdmEditReviews",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#0E1422" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Edit Review`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Edit Review`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
paddingVertical: 20,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
width: '27%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a7b.editData.review.name`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7b.editData.review.name`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Review`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
multiline: 'true',
}`],

          stylesArray: [`{
width: '27%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`sc.a7b.editData.review.review`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a7b.editData.review.review`],
          value: [`$arg_callback`]
        }})],

          args,
        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flexDirection: 'row',
alignSelf: 'flex-start',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.updateDocTool({ args, pass:{
   arrRefStrings: [
        `reviewsEcommerce`, `$var_sc.a7b.editData.review.docId`],
            arrPathData: [`$var_sc.a7b.editData.review`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a7b.editData.review`],
          value: [``]
        }})],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Save Review`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '138px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`$var_sc.a7b.editData.review`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Cancel`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [() => {
  const review = tools.getCtData("sc.a7b.editData.review");
  console.log("Review data:", review);
}]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"a8AdmSettings",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
maxWidth: '220px',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#5C5F6A" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: 'white',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
color: '#717171',
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
height: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
alignItems: 'center',
flexDirection: 'row',
paddingHorizontal: '24',
paddingVertical: '8',
backgroundColor: '#F6F6F6',
borderRadius: '8px',
width: '155px',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#0E1422" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '10px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
paddingVertical: 20,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Site Name`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: '',
}`],

          stylesArray: [`{
width: '27%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`teste.1`],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Support Email`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: '',
}`],

          stylesArray: [`{
width: '27%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`teste.2`],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '15px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#474B57",
  paddingVertical: '5',
}`
          ],

          children: [
            `Monthly Order Goal`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
placeholder: '',
}`],

          stylesArray: [`{
width: '27%',
height: '45px',
borderRadius: 6,
borderWidth: 1,
borderColor: '#E6E7E8',
paddingVertical: 10,
paddingHorizontal: 15,
}`],

          path: [`teste.3`],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: '40px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '144px',
height: '44px',
paddingHorizontal: '24px',
paddingVertical: '12px',
backgroundColor: '#0E1422',
borderRadius: 4,
alignItems: 'center',
justifyContent: 'center',
alignSelf: 'flex-start',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [()=>{}]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Save Changes`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"HomePage",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#F6F6F6',
padding: 20,
 }`],

          screenElements:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
backgroundColor: '#000',
alignItems: 'center',
justifyContent: 'center',
padding: '5px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
}`
          ],

          children: [
            `Get 25% OFF on your first order. Order now`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#fff', 
padding: 20,
flexDirection: 'row',
height: '40px',
alignItems: 'center',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '400px',
alignItems: 'center',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Home`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Categories`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `About`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Contact`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '242px',
height: '40px',
justifyContent: 'initial',
alignItems: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#eee',
paddingHorizontal: 10,
paddingVertical: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.02 13.5-3.75-3.75m1.59-3.83a5.42 5.42 0 1 1-10.84 0 5.42 5.42 0 0 1 10.84 0Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.02 13.5L10.27 9.75M11.86 5.92C11.86 8.91338 9.43334 11.34 6.43996 11.34C3.44658 11.34 1.01996 8.91338 1.01996 5.92C1.01996 2.92662 3.44658 0.5 6.43996 0.5C9.43334 0.5 11.86 2.92662 11.86 5.92Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#fff`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '10px', }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
 placeholder: 'Search products',
}`],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{
width: '100%',
}`],
            arrProps: [],
            arrItems: [

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
padding: 20,
flexDirection: 'row',
alignItems: 'center',
backgroundColor: '#F6F6F6',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '50%',
justifyContent: 'center',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 30, 
  fontWeight: '600', 
  fontFamily: "Inter", 
  marginBottom: 10,
}`
          ],

          children: [
            `Fresh Arrivals Online`
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 16, 
  marginBottom: 30,
}`
          ],

          children: [
            `Discover Our Newest Collection Today.`
          ],

          args,

        }}/>, 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '200px',
height: '50px',
padding: 10,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
justifyContent: 'center',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontFamily: "Inter", 
  color: '#FFF',
}`
          ],

          children: [
            `View Collection`
          ],

          args,

        }}/>, (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fillRule="evenodd"
      d="M12.293 5.293a1 1 0 0 1 1.414 0l6 6a1 1 0 0 1 0 1.414l-6 6a1 1 0 0 1-1.414-1.414L16.586 13H5a1 1 0 1 1 0-2h11.586l-4.293-4.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M12.2929 5.29289C12.6834 4.90237 13.3166 4.90237 13.7071 5.29289L19.7071 11.2929C20.0976 11.6834 20.0976 12.3166 19.7071 12.7071L13.7071 18.7071C13.3166 19.0976 12.6834 19.0976 12.2929 18.7071C11.9024 18.3166 11.9024 17.6834 12.2929 17.2929L16.5858 13H5C4.44772 13 4 12.5523 4 12C4 11.4477 4.44772 11 5 11H16.5858L12.2929 6.70711C11.9024 6.31658 11.9024 5.68342 12.2929 5.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "30px",

      largura: "30px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '50%',
justifyContent: 'center',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '631px',
height: '652px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2Fecommerce%20banner.png?alt=media&token=60380466-dd9e-4bd9-98af-bec567244b5e`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],
            args,
        }}/>],

          functions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"TestesPage",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '100%',
height: '100%',
flexDirection: 'row',
 }`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '20%',
backgroundColor: '#FFF',
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
alignItems: 'center',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '116px',
height: '40px',
}],

      URIvariablePath:[`https://firebasestorage.googleapis.com/v0/b/devs-tests-95208.appspot.com/o/images%2FAdmin.png?alt=media&token=94ebd672-5bdd-4e25-81b7-a1b36e29e6e0`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a1AdmDash");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#0E1422"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.43}
      d="M18.923 11.923h-4.615a.577.577 0 0 0-.577.577v6.923c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V12.5a.577.577 0 0 0-.577-.577ZM18.923 5h-4.615a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32A.577.577 0 0 0 18.923 5ZM9.692 5H5.077a.577.577 0 0 0-.577.577V12.5c0 .319.258.577.577.577h4.615a.577.577 0 0 0 .577-.577V5.577A.577.577 0 0 0 9.692 5ZM9.692 16.527H5.077a.577.577 0 0 0-.577.577v2.32c0 .318.258.576.577.576h4.615a.577.577 0 0 0 .577-.577v-2.32a.577.577 0 0 0-.577-.576Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M18.9231 11.9231H14.3077C13.9891 11.9231 13.7308 12.1814 13.7308 12.5V19.4231C13.7308 19.7417 13.9891 20 14.3077 20H18.9231C19.2417 20 19.5 19.7417 19.5 19.4231V12.5C19.5 12.1814 19.2417 11.9231 18.9231 11.9231Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M18.9231 5H14.3077C13.9891 5 13.7308 5.2583 13.7308 5.57692V7.89615C13.7308 8.21478 13.9891 8.47308 14.3077 8.47308H18.9231C19.2417 8.47308 19.5 8.21478 19.5 7.89615V5.57692C19.5 5.2583 19.2417 5 18.9231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 5H5.07692C4.7583 5 4.5 5.2583 4.5 5.57692V12.5C4.5 12.8186 4.7583 13.0769 5.07692 13.0769H9.69231C10.0109 13.0769 10.2692 12.8186 10.2692 12.5V5.57692C10.2692 5.2583 10.0109 5 9.69231 5Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
<path d="M9.69231 16.5269H5.07692C4.7583 16.5269 4.5 16.7852 4.5 17.1038V19.4231C4.5 19.7417 4.7583 20 5.07692 20H9.69231C10.0109 20 10.2692 19.7417 10.2692 19.4231V17.1038C10.2692 16.7852 10.0109 16.5269 9.69231 16.5269Z" stroke="#0E1422" stroke-width="1.43" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Dashboard`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M5.23 10.167h13.54m-13.54 0v8.166c0 .31.13.607.361.825.231.219.544.342.87.342H17.54c.326 0 .639-.123.87-.342.23-.219.36-.515.36-.825v-8.166m-13.538 0C4.55 10.167 4 9.644 4 9V6.667C4 6.022 4.551 5.5 5.23 5.5h13.54c.679 0 1.23.522 1.23 1.167V9c0 .644-.551 1.167-1.23 1.167m-8.616 3.5h3.692"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M5.23077 10.1667H18.7692M5.23077 10.1667V18.3333C5.23077 18.6427 5.36044 18.9395 5.59125 19.1583C5.82207 19.377 6.13511 19.5 6.46154 19.5H17.5385C17.8649 19.5 18.178 19.377 18.4087 19.1583C18.6395 18.9395 18.7692 18.6427 18.7692 18.3333V10.1667M5.23077 10.1667C4.55103 10.1667 4 9.64433 4 9V6.66667C4 6.02234 4.55103 5.5 5.23077 5.5H18.7692C19.449 5.5 20 6.02234 20 6.66667V9C20 9.64433 19.449 10.1667 18.7692 10.1667M10.1538 13.6667H13.8462" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
fontWeight: '500',
fontFamily: 'Inter',
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a5AdmOrders");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M3 3.5h3.383L7.59 15.477a1.384 1.384 0 0 0 1.385 1.177h8.728a1.386 1.386 0 0 0 1.385-.942l1.843-5.538a1.383 1.383 0 0 0-.194-1.246 1.385 1.385 0 0 0-1.191-.582H6.868m4.694 2.77v2.769m4.156-2.77v2.77m1.749 7.615a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Zm-9.006 0a.693.693 0 1 1 0-1.385.693.693 0 0 1 0 1.385Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3.5H6.38321L7.58853 15.4769C7.63862 15.8071 7.80643 16.108 8.06102 16.3243C8.31561 16.5406 8.63984 16.6576 8.97395 16.6538H17.7021C18.0042 16.6696 18.3032 16.5861 18.5534 16.4161C18.8035 16.2461 18.9912 15.9989 19.0875 15.7123L20.9302 10.1738C20.999 9.96564 21.0173 9.74406 20.9836 9.52739C20.9498 9.31072 20.865 9.10517 20.7362 8.92769C20.6021 8.73894 20.4227 8.58681 20.2146 8.48522C20.0065 8.38362 19.7761 8.33581 19.5447 8.34615H6.8681M11.5619 11.1154V13.8846M15.7182 11.1154V13.8846M17.4666 21.5C17.2829 21.5 17.1067 21.4271 16.9768 21.2972C16.8469 21.1674 16.7739 20.9913 16.7739 20.8077C16.7739 20.6241 16.8469 20.448 16.9768 20.3182C17.1067 20.1883 17.2829 20.1154 17.4666 20.1154C17.6503 20.1154 17.8265 20.1883 17.9564 20.3182C18.0863 20.448 18.1593 20.6241 18.1593 20.8077C18.1593 20.9913 18.0863 21.1674 17.9564 21.2972C17.8265 21.4271 17.6503 21.5 17.4666 21.5ZM8.46134 21.5C8.27762 21.5 8.10143 21.4271 7.97152 21.2972C7.84161 21.1674 7.76863 20.9913 7.76863 20.8077C7.76863 20.6241 7.84161 20.448 7.97152 20.3182C8.10143 20.1883 8.27762 20.1154 8.46134 20.1154C8.64506 20.1154 8.82126 20.1883 8.95116 20.3182C9.08107 20.448 9.15406 20.6241 9.15406 20.8077C9.15406 20.9913 9.08107 21.1674 8.95116 21.2972C8.82126 21.4271 8.64506 21.5 8.46134 21.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Orders`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a6AdmCustomers");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="M14.77 11.167c1.911 0 3.46-1.493 3.46-3.334 0-1.84-1.549-3.333-3.46-3.333m3.46 16H21v-.723a5.844 5.844 0 0 0-.809-2.898 6.122 6.122 0 0 0-2.162-2.16 6.38 6.38 0 0 0-1.875-.74M9.23 11.167c1.912 0 3.461-1.493 3.461-3.334 0-1.84-1.55-3.333-3.461-3.333-1.912 0-3.462 1.492-3.462 3.333 0 1.841 1.55 3.334 3.462 3.334ZM3 20.5h12.461v-.723a5.843 5.843 0 0 0-.808-2.898 6.122 6.122 0 0 0-2.163-2.16 6.417 6.417 0 0 0-3.541-.886 6.417 6.417 0 0 0-2.978.886 6.121 6.121 0 0 0-2.162 2.16A5.843 5.843 0 0 0 3 19.777v.723Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.7692 11.1666C16.681 11.1666 18.2308 9.67424 18.2308 7.83331C18.2308 5.99237 16.681 4.5 14.7692 4.5M18.2308 20.5H21V19.7771C20.9889 18.7608 20.7106 17.7638 20.191 16.8792C19.6713 15.9946 18.9274 15.2513 18.0285 14.7186C17.4475 14.3743 16.8139 14.1253 16.1538 13.9793M9.23077 11.1666C11.1425 11.1666 12.6923 9.67424 12.6923 7.83331C12.6923 5.99237 11.1425 4.5 9.23077 4.5C7.31902 4.5 5.76923 5.99237 5.76923 7.83331C5.76923 9.67424 7.31902 11.1666 9.23077 11.1666ZM3 20.4999H15.4615V19.7771C15.4505 18.7608 15.1722 17.7638 14.6526 16.8792C14.1329 15.9946 13.3889 15.2512 12.4901 14.7186C11.5912 14.1859 10.5668 13.8814 9.51257 13.8333C9.41858 13.829 9.32462 13.8268 9.23077 13.8266C9.13692 13.8268 9.04296 13.829 8.94897 13.8333C7.89474 13.8814 6.87035 14.1859 5.97148 14.7186C5.07263 15.2512 4.32864 15.9946 3.80899 16.8792C3.28935 17.7638 3.01102 18.7608 3 19.7771V20.4999Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Customers`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a7AdmReviews");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.4}
      d="m12 6 2.163 4.279 4.837.69-3.5 3.329.826 4.702L12 16.779 7.674 19l.826-4.702L5 10.969l4.837-.69L12 6Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M12 6L14.163 10.2787L19 10.969L15.5 14.2976L16.326 19L12 16.7787L7.674 19L8.5 14.2976L5 10.969L9.837 10.2787L12 6Z" stroke="#5C5F6A" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Reviews`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
alignItems: 'center',
flexDirection: 'row',
marginBottom: 10,
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a8AdmSettings");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={25}
    fill="red"
    viewBox="0 0 24 25"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.429}
      d="m9.627 6.288.577-1.451c.097-.246.268-.457.49-.607.223-.149.486-.23.756-.23h1.1c.27 0 .533.081.756.23.222.15.393.361.49.607l.577 1.451 1.957 1.099 1.582-.235a1.37 1.37 0 0 1 .77.121c.238.114.437.295.57.52l.536.915a1.282 1.282 0 0 1-.107 1.477l-.979 1.216v2.197l1.006 1.217a1.282 1.282 0 0 1 .107 1.478l-.536.915a1.329 1.329 0 0 1-.57.519 1.371 1.371 0 0 1-.77.122l-1.582-.236-1.957 1.099-.577 1.451a1.315 1.315 0 0 1-.49.607c-.223.149-.487.23-.757.23H11.45c-.27 0-.533-.081-.756-.23a1.314 1.314 0 0 1-.49-.607l-.577-1.451-1.957-1.099-1.582.236a1.37 1.37 0 0 1-.77-.122 1.329 1.329 0 0 1-.57-.52l-.536-.915a1.282 1.282 0 0 1 .107-1.477l.979-1.216v-2.197l-1.006-1.217a1.282 1.282 0 0 1-.107-1.478l.536-.915c.133-.224.332-.405.57-.519a1.37 1.37 0 0 1 .77-.121l1.582.235 1.984-1.099ZM9.32 12.5c0 .517.157 1.023.452 1.453.294.43.713.765 1.203.963.49.198 1.029.25 1.549.15.52-.102.998-.35 1.373-.717.375-.365.63-.831.733-1.339a2.557 2.557 0 0 0-.152-1.51 2.63 2.63 0 0 0-.988-1.175A2.73 2.73 0 0 0 12 9.885c-.711 0-1.393.275-1.896.766A2.584 2.584 0 0 0 9.32 12.5Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="25" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M9.62731 6.28846L10.2037 4.83692C10.3009 4.59116 10.472 4.37977 10.6944 4.23043C10.9169 4.0811 11.1804 4.00078 11.4504 4H12.5496C12.8196 4.00078 13.0831 4.0811 13.3056 4.23043C13.528 4.37977 13.699 4.59116 13.7962 4.83692L14.3727 6.28846L16.3297 7.38692L17.9115 7.15154C18.1749 7.11666 18.443 7.15895 18.6818 7.27305C18.9204 7.38715 19.1189 7.56788 19.252 7.79231L19.7882 8.70769C19.9256 8.93569 19.989 9.19897 19.9698 9.46278C19.9507 9.72659 19.85 9.97855 19.681 10.1854L18.7024 11.4015V13.5985L19.7078 14.8146C19.8768 15.0215 19.9775 15.2734 19.9966 15.5372C20.0158 15.801 19.9524 16.0643 19.815 16.2923L19.2788 17.2077C19.1457 17.4321 18.9472 17.6128 18.7086 17.727C18.4698 17.841 18.2017 17.8834 17.9383 17.8485L16.3565 17.6131L14.3995 18.7115L13.8231 20.1631C13.7258 20.4088 13.5548 20.6202 13.3324 20.7696C13.1099 20.9189 12.8464 20.9992 12.5764 21H11.4504C11.1804 20.9992 10.9169 20.9189 10.6944 20.7696C10.472 20.6202 10.3009 20.4088 10.2037 20.1631L9.62731 18.7115L7.67019 17.6131L6.08841 17.8485C5.82502 17.8834 5.55695 17.841 5.31826 17.727C5.07959 17.6128 4.88106 17.4321 4.74791 17.2077L4.21171 16.2923C4.07431 16.0643 4.01101 15.801 4.03016 15.5372C4.0493 15.2734 4.15 15.0215 4.31895 14.8146L5.29751 13.5985V11.4015L4.29214 10.1854C4.12319 9.97855 4.02249 9.72659 4.00335 9.46278C3.9842 9.19897 4.0475 8.93569 4.1849 8.70769L4.7211 7.79231C4.85425 7.56788 5.05278 7.38715 5.29145 7.27305C5.53014 7.15895 5.79821 7.11666 6.0616 7.15154L7.64338 7.38692L9.62731 6.28846ZM9.319 12.5C9.319 13.0173 9.47624 13.5229 9.77082 13.953C10.0654 14.3831 10.4841 14.7183 10.974 14.9163C11.4639 15.1142 12.003 15.166 12.523 15.0651C13.0431 14.9642 13.5208 14.7151 13.8957 14.3494C14.2707 13.9836 14.526 13.5176 14.6295 13.0102C14.7329 12.5029 14.6798 11.977 14.4769 11.4991C14.274 11.0212 13.9304 10.6128 13.4895 10.3254C13.0486 10.038 12.5302 9.88462 12 9.88462C11.2889 9.88462 10.607 10.1602 10.1042 10.6506C9.60147 11.1411 9.319 11.8064 9.319 12.5Z" stroke="#5C5F6A" stroke-width="1.42857" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "24px",

      largura: "24px",

      preenchimento: [`#FFF`],

      args,
    }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
fontSize: 14,
}`
          ],

          children: [
            `Settings`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ 
width: '80%',
height: '100%',
paddingHorizontal: 20,
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'initial',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
paddingHorizontal: '5px',
paddingVertical: '20px',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Admin > `
          ],

          args,

        }}/>, 
        (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ flex: 1, }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '15px',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.session.user`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.email`],
          value: [``]
        }}), 
async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a0.login.forms.password`],
          value: [``]
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a0AdmLogin");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="red"
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      fill="#0F1729"
      fillRule="evenodd"
      d="M2 6.5A4.5 4.5 0 0 1 6.5 2H12a4 4 0 0 1 4 4v1a1 1 0 1 1-2 0V6a2 2 0 0 0-2-2H6.5A2.5 2.5 0 0 0 4 6.5v11A2.5 2.5 0 0 0 6.5 20H12a2 2 0 0 0 2-2v-1a1 1 0 1 1 2 0v1a4 4 0 0 1-4 4H6.5A4.5 4.5 0 0 1 2 17.5v-11Zm16.293 1.793a1 1 0 0 1 1.414 0l3 3a1 1 0 0 1 0 1.414l-3 3a1 1 0 0 1-1.414-1.414L19.586 13H11a1 1 0 1 1 0-2h8.586l-1.293-1.293a1 1 0 0 1 0-1.414Z"
      clipRule="evenodd"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path fill-rule="evenodd" clip-rule="evenodd" d="M2 6.5C2 4.01472 4.01472 2 6.5 2H12C14.2091 2 16 3.79086 16 6V7C16 7.55228 15.5523 8 15 8C14.4477 8 14 7.55228 14 7V6C14 4.89543 13.1046 4 12 4H6.5C5.11929 4 4 5.11929 4 6.5V17.5C4 18.8807 5.11929 20 6.5 20H12C13.1046 20 14 19.1046 14 18V17C14 16.4477 14.4477 16 15 16C15.5523 16 16 16.4477 16 17V18C16 20.2091 14.2091 22 12 22H6.5C4.01472 22 2 19.9853 2 17.5V6.5ZM18.2929 8.29289C18.6834 7.90237 19.3166 7.90237 19.7071 8.29289L22.7071 11.2929C23.0976 11.6834 23.0976 12.3166 22.7071 12.7071L19.7071 15.7071C19.3166 16.0976 18.6834 16.0976 18.2929 15.7071C17.9024 15.3166 17.9024 14.6834 18.2929 14.2929L19.5858 13L11 13C10.4477 13 10 12.5523 10 12C10 11.4477 10.4477 11 11 11L19.5858 11L18.2929 9.70711C17.9024 9.31658 17.9024 8.68342 18.2929 8.29289Z" fill="#0F1729"/>
</svg>
      `,

      altura: "15px",

      largura: "15px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
paddingHorizontal: 20,
paddingBottom: 35,
borderRadius: 10,
borderWidth: 1,
borderColor: "#E9E9EB",
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '100px',
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 18, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#0E1422",
}`
          ],

          children: [
            `Products`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '124px',
height: '40px',
paddingHorizontal: '20px',
paddingVertical: '12px',
backgroundColor: '#000',
borderRadius: 4,
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admAddProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{
color: '#FFF',
fontFamily: 'Inter',
fontSize: '14px',
}`
          ],

          children: [
            `Add product`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '16px', }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '242px',
height: '40px',
justifyContent: 'initial',
alignItems: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#eee',
paddingHorizontal: 10,
paddingVertical: 5,
flexDirection: 'row',
}`],

            functions:[()=>{}],            childrenItems:[
        (...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="m14.02 13.5-3.75-3.75m1.59-3.83a5.42 5.42 0 1 1-10.84 0 5.42 5.42 0 0 1 10.84 0Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M14.02 13.5L10.27 9.75M11.86 5.92C11.86 8.91338 9.43334 11.34 6.43996 11.34C3.44658 11.34 1.01996 8.91338 1.01996 5.92C1.01996 2.92662 3.44658 0.5 6.43996 0.5C9.43334 0.5 11.86 2.92662 11.86 5.92Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "17px",

      largura: "17px",

      preenchimento: [`#fff`],

      args,
    }}/>, 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '10px', }`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [`{
 placeholder: 'Search products',
}`],

          stylesArray: [{
                color: 'black',
                fontSize: 14,
                // fontSize: '20px',<= #ATTENTION: Native ERROR! No string!
              }],

          path: [" "],

          funcsArray: [() => {}],

          args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '44px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', left: '14px', }`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    viewBox="0 0 24 24"
    {...props}
  >
    <Path
      stroke="#474B57"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.143}
      d="M6 8.309 8.375 6m0 0 2.377 2.307M8.375 6l.004 12M18 15.692 15.624 18m0 0-2.377-2.308M15.625 18V6"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M6 8.3087L8.37549 6.00035M8.37549 6.00035L10.7525 8.30726M8.37549 6.00035L8.37935 18M18 15.692L15.6238 17.9997M15.6238 17.9997L13.2475 15.692M15.6238 17.9997V6" stroke="#474B57" stroke-width="1.14286" stroke-linecap="round" stroke-linejoin="round"/>
</svg>
      `,

      altura: "20px",

      largura: "20px",

      preenchimento: ['black'],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Name`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `SKU`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Price`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Stock`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Categories`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `Action`
          ],

          args,

        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        , (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ flex:1, width: '100%',}`],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: `sc.a2.list`,

          itemElements: [
            
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  height: 1,
  width: '100%',
  backgroundColor: '#dfdfe1',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
alignItems: 'center',
height: '80px',
flexDirection: 'row',
paddingHorizontal: '10px',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '70px', }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '48px',
height: '48px',
}],

      URIvariablePath:[`$arg_image`],

      args,
    }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
  flexGrow: 1,
  flexShrink: 1,
  flexBasis: 80,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_label`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_sku`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_price`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_stock`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ 
  fontSize: 14, 
  fontWeight: "500", 
  fontFamily: "Inter", 
  color: "#5C5F6A",
}`
          ],

          children: [
            `$arg_categories`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
flex: 1,
flexDirection: 'row',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
async (...args) =>
        functions.firebase.getDocTool({ args, pass:{
  arrRefStrings: [
        `productsEcommerce`, `$arg_docId`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.admEditProduct.product`],
          value: [`$arg_callback`]
        }})],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admEditProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={15}
    height={14}
    fill="red"
    viewBox="0 0 15 14"
    {...props}
  >
    <Path
      fill="#fff"
      d="m8.02 9-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
    <Path
      fill="#fff"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3"
    />
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12.52 9.5v3a1 1 0 0 1-1 1h-9.5a1 1 0 0 1-1-1V3a1 1 0 0 1 1-1h3m3 7-3 .54.5-3.04L11.25.79a.999.999 0 0 1 1.42 0l1.06 1.06a1 1 0 0 1 0 1.42L8.02 9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="15" height="14" viewBox="0 0 15 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996" fill="white"/>
<path d="M12.52 9.49994V12.4999C12.52 12.7652 12.4146 13.0195 12.2271 13.207C12.0395 13.3946 11.7852 13.4999 11.52 13.4999H2.01996C1.75474 13.4999 1.50039 13.3946 1.31285 13.207C1.12532 13.0195 1.01996 12.7652 1.01996 12.4999V2.99994C1.01996 2.73472 1.12532 2.48037 1.31285 2.29283C1.50039 2.1053 1.75474 1.99994 2.01996 1.99994H5.01996M8.01996 8.99994L5.01996 9.53994L5.51996 6.49994L11.25 0.789939C11.3429 0.696211 11.4535 0.621816 11.5754 0.571048C11.6972 0.520279 11.8279 0.494141 11.96 0.494141C12.092 0.494141 12.2227 0.520279 12.3445 0.571048C12.4664 0.621816 12.577 0.696211 12.67 0.789939L13.73 1.84994C13.8237 1.9429 13.8981 2.0535 13.9488 2.17536C13.9996 2.29722 14.0258 2.42793 14.0258 2.55994C14.0258 2.69195 13.9996 2.82266 13.9488 2.94452C13.8981 3.06637 13.8237 3.17698 13.73 3.26994L8.01996 8.99994Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '30px',
height: '30px',
alignItems: 'center',
justifyContent: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
(...args) =>
        functions.firebase.deleteDocTool({ args, pass:{
   arrRefStrings: [
        `productsEcommerce`, `$arg_docId`],
   arrFuncs: [() => {}],
        }}), 
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("a2AdmProducts");
        }
        ]
 , trigger: 'on press'
}})],            childrenItems:[(...args:any) => <Elements.SvgView1 pass={{
      componentSvg: (Svg:any, SvgObj:any) => {
        const { Defs, Stop, Path, LinearGradient, G, Circle, Rect, Mask } = SvgObj;
        return (props:any) => (<Svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={14}
    fill="red"
    viewBox="0 0 14 14"
    {...props}
  >
    <Path
      stroke="#5C5F6A"
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M1 3.5h12m-8.5 0V3a2.5 2.5 0 1 1 5 0v.5m-4 2V11m3-5.5V11m-6-7.5h9v9a1 1 0 0 1-1 1h-7a1 1 0 0 1-1-1v-9Z"
    />
  </Svg>)
      },

      svgOriginal: `
        <svg width="14" height="14" viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
<path d="M1 3.5H13M4.5 3.5V3C4.5 2.33696 4.76339 1.70107 5.23223 1.23223C5.70107 0.763392 6.33696 0.5 7 0.5C7.66304 0.5 8.29893 0.763392 8.76777 1.23223C9.23661 1.70107 9.5 2.33696 9.5 3V3.5M5.5 5.5V11M8.5 5.5V11M2.5 3.5H11.5V12.5C11.5 12.7652 11.3946 13.0196 11.2071 13.2071C11.0196 13.3946 10.7652 13.5 10.5 13.5H3.5C3.23478 13.5 2.98043 13.3946 2.79289 13.2071C2.60536 13.0196 2.5 12.7652 2.5 12.5V3.5Z" stroke="#5C5F6A" stroke-linecap="round" stroke-linejoin="round"/>
</svg>

      `,

      altura: "15px",

      largura: "15px",

      preenchimento: [`#fff`],

      args,
    }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        
          ],

      styles:[
              {
                backgroundColor: 'white',
                justifyContent: 'center',
                minHeight: 22,
                width: "100%",
              }
              ],    args,
        }}/>],
            args,
        }}/>],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

            args,
          }}/>
        ],

          functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [async (...args) =>
        functions.firebase.getDocsTool({ args, pass:{
   arrRefStrings: [`permissions`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.a2.list`],
          value: [`$arg_callback`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>
          ];

          const initCt = () => (
 {
 'all': { 
'colors': { 
'primary': "#000", 
'secondary': "#0064fe", 
'success': "#D5E5D7", 'error': "#DC3545" } 
, 
'func1': (nativeEvent)=>console.log(nativeEvent), 
'Comp1': <RN.Text style={{color: "darkred"}}>---</RN.Text>, 
'lists': { 
'lt1': [{name: "João", img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"},{name: "Luciana"},{name: "Pedro"}], 
'lst2': [{name: "Tarefa 1", date: "21/03/25"},{name: "Tarefa 2", date: "21/03/25"},{name: "Tarefa 3", date: "24/03/25"}], 'lst3': [{name: "Task 1", check: false},{name: "Task 2", check: false}] } 
, 
'toggles': { 
'box1': true, 'checkbox1': false } 
, 'firebaseConfig': {
  apiKey: "AIzaSyDjAfyEUADq7EaRyFWlGFjP1Eoox9LJHgI",
  authDomain: "devs-tests-95208.firebaseapp.com",
  projectId: "devs-tests-95208",
  storageBucket: "devs-tests-95208.appspot.com",
  messagingSenderId: "750912250366",
  appId: "1:750912250366:web:4629eac789a718a74220af"
} } 
 
} 
 );
          const initObj = initCt();
          // console.log(initObj);

          const arrInitFuncs = [
            async (...args) =>
  functions.firebase.fireInit({ args, pass:{
   fbConfig: `all.firebaseConfig`,

        }})
          ];

          export const useRoutes = create(() => ({ currRoute }));
          export const useData = create(() => initObj);

          // ---------- set Main Component
          export const Router = () => {
            return (
              <Project
                configData={{
                  screens,
                  initCt,
                  arrInitFuncs,
                }}
              />
            );
          };
        
