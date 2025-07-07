

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
          const currRoute = 'dsystem';

          let args: any = [];

          const screens = [
            
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"dsystem",

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
        (...args:any) => <Elements.ScrollBar pass={{
            styles: [`{ backgroundColor: "#EFEFEF", width: "100%", padding: 20 }`],
            arrProps: [],
            arrItems: [
        

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
            `{ fontSize: 40, fontWeight: 900, fontFamily: "Inter" }`
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
            `{ fontSize: 30, fontWeight: 600 }`
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
            `{ fontSize: 24, fontWeight: 600 }`
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
            `{ fontSize: 18, fontWeight: 600 }`
          ],

          children: [
            `Aa —  Explore the world.`
          ],

          args,

        }}/>, (...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            `{ fontSize: 14, fontWeight: 400 }`
          ],

          children: [
            `Aa —  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus in neque in massa rhoncus suscipit. `
          ],

          args,

        }}/>],

            args,
          }}/>
        , 
        

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
        , 
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
        ],
            args,
        }}/>, 

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

            styles:[`{ backgroundColor: "purple", }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admLogin");
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
            `ADM - Login TESTE RENAN2`
          ],

          args,

        }}/>],

            args,
          }}/>
        , 

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ backgroundColor: "blue", }`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admDash");
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
            `ADM - Dashboard`
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
          pathScreen:"admLogin",

          styles:[`{ 
width: '100%',
height: '100%',
alignItems: 'center',
justifyContent: 'center',
backgroundColor: '#eee', 
 }`],

          screenElements:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '400px',
backgroundColor: '#FFF',
alignItems: 'center',
padding: 10,
borderRadius: 10,
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
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `E-mail`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
borderRadius: 5,
borderWidth: 1,
borderColor: '#eee',
padding: 10,
}`],

          path: [`sc.adm.login.forms.email`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.login.forms.email`],
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
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Password`
          ],

          args,

        }}/>, (...args:any) => <Elements.IptTxtEdit pass={{
          propsArray: [{}],

          stylesArray: [`{
borderRadius: 5,
borderWidth: 1,
borderColor: '#eee',
padding: 10,
}`],

          path: [`sc.adm.login.forms.password`],

          funcsArray: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.adm.login.forms.password`],
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
height: '30px',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

            args,
          }}/>
        , 
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '95%',
padding: 10,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
backgroundColor: '#000',
alignItems: 'center',
}`],

            functions:[async (...args) =>
 functions.funcGroup({ args, pass:{
 arrFunctions: [
        (...args) => {
          // ---------- get Function from A_Project Scope
          return tools.goTo("admDash");
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
            `Login`
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
        ],

            args,
          }}/>
        ],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"admDash",

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
          return tools.goTo("admDash");
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
          return tools.goTo("admProducts");
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
          return tools.goTo("admOrders");
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
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Admin > Dashboard`
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

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"admProducts",

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
          return tools.goTo("admDash");
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
          return tools.goTo("admProducts");
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
          return tools.goTo("admOrders");
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
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Admin > Products`
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
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
padding: 10,
borderRadius: 10,
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
fontSize: 14,
fontWeight: '700',
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
width: '100px',
padding: 5,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
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
            `Add product`
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
width: '100px',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#eee',
padding: 5,
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
height: '40px',
flexDirection: 'row',
borderTopWidth: 1,
borderBottomWidth: 1,
borderColor: '#eee',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '30px', }`],

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
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            styles: [],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: '',

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
borderWidth: 2,
borderColor: '#dbbc1d',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '30px', }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '20px',
height: '20px',
}],

      URIvariablePath:[`$arg_thumb`],

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
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            `Action`
          ],

          args,

        }}/>],

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
   arrRefStrings: [`products`],
            arrFuncs: [async (...args) =>
        functions.setVar({ args, pass:{
          keyPath: [`sc.admProducts.list.products`],
          value: [`$arg_0`]
        }})],
        }})]
 , trigger: 'on init'
}})],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"admAddProducts",

          styles:[`{ 
width: '100%',
height: '100%',
backgroundColor: '#eee', 
 }`],

          screenElements:[() => {
                  const textStyle = {
                    fontSize: 20,
                    color: '#fff2',
                    textAlign:'center',
                    maxWidth: 200,
                    // maxWidth: '200px'<= #ATTENTION: Native ERROR! No string!
                  };

                  return (
                    <RN.Text style={textStyle}>
                      {'Adicione Elementos nessa tela!'}
                    </RN.Text>);
                }],

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"admOrders",

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
          return tools.goTo("admDash");
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
          return tools.goTo("admProducts");
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
          return tools.goTo("admOrders");
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
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Admin > Orders`
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
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
padding: 10,
borderRadius: 10,
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
fontSize: 14,
fontWeight: '700',
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
width: '100px',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#eee',
padding: 5,
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
height: '40px',
flexDirection: 'row',
borderTopWidth: 1,
borderBottomWidth: 1,
borderColor: '#eee',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '30px', }`],

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
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
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
            styles: [],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: '',

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
borderWidth: 2,
borderColor: '#dbbc1d',
}`],

            functions:[()=>{}],            childrenItems:[() =><></>],

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

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"admCustomers",

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
          return tools.goTo("admDash");
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
          return tools.goTo("admProducts");
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
          return tools.goTo("admOrders");
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
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Admin > Customers`
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
margin: 10,
backgroundColor: '#FFF',
alignItems: 'center',
padding: 10,
borderRadius: 10,
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
fontSize: 14,
fontWeight: '700',
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
width: '100px',
padding: 5,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
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
            `Add product`
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
width: '100px',
justifyContent: 'center',
borderRadius: 5,
borderWidth: 1,
borderColor: '#eee',
padding: 5,
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
height: '40px',
flexDirection: 'row',
borderTopWidth: 1,
borderBottomWidth: 1,
borderColor: '#eee',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '30px', }`],

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
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            styles: [],
            arrProps: [],
            arrItems: [(...args:any) => <Elements.FlatList2 pass={{
          elementProperties: [
            {}
          ],

          pData: '',

          itemElements: [
            

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '120px',
paddingHorizontal: 20,
paddingVertical: 10,
backgroundColor: '#000',
borderRadius: 5,
alignItems: 'center',
borderWidth: 2,
borderColor: '#dbbc1d',
}`],

            functions:[()=>{}],            childrenItems:[
        

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{ width: '30px', }`],

            functions:[()=>{}],            childrenItems:[

    (...args:any) => <Elements.ImageBox pass={{
      elementsProperties:[{}],

      styles:[{
width: '20px',
height: '20px',
}],

      URIvariablePath:[`$arg_thumb`],

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
            { color: 'black', fontSize: 12, }
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
            { color: 'black', fontSize: 12, }
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
            `Action`
          ],

          args,

        }}/>],

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

          functions:[()=>{}],

          args,
        }}/>, 
        

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"admReviews",

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
          return tools.goTo("admDash");
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
          return tools.goTo("admProducts");
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
          return tools.goTo("admOrders");
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
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Admin > Reviews`
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

          functions:[()=>{}],

          args,
        }}/>, 

        (...args: any) => <Elements.Screen3 pass={{
          pathScreen:"admSettings",

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
          return tools.goTo("admDash");
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
          return tools.goTo("admProducts");
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
          return tools.goTo("admOrders");
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
}`],

            functions:[()=>{}],            childrenItems:[

          (...args:any) => <Elements.DynView pass={{
            elementsProperties:['{}'],

            styles:[`{
width: '100%',
justifyContent: 'center',
height: '100px',
}`],

            functions:[()=>{}],            childrenItems:[(...args:any) => <Elements.Text pass={{
          arrProps: [
            '{}'
          ],

          arrStyles: [
            { color: 'black', fontSize: 12, }
          ],

          children: [
            `Admin > Settings`
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

          functions:[()=>{}],

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
        
