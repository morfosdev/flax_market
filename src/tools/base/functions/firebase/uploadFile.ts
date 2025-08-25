
// ---------- import Local Tools
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getCtData, testVarType } from '../../project';

type Tprops = {
  args: any;
  pass: { fbInit: any[]; arrFiles: any[]; arrFuncs: any[] };
};

export const uploadFile = async (props: Tprops) => {
  console.log('UPLOAD DE ARQUIVOS');
  // ---------- set Props
  const { args, pass } = props;
  const { arrFiles, arrFuncs } = pass;
  const fbInit = getCtData('all.temp.fireInit');
  console.log({ fbInit, arrFiles, arrFuncs });

  // -----------------------------
  // -------- set Firestore Call 1
  // -----------------------------
  const storage = getStorage(fbInit);
  console.log({ storage });

  // ------ read Data
  //   let dataToUpdate: any = {};
  //   const newPath = arrPathData.map(i => {
  //     const varValue = testVarType(i, args);
  //     return varValue;
  //   });
  //   dataToUpdate = getCtData(newPath.join('.'));

  //   const objData = arrFiles[0];
  //   console.log({ objData });

  let arrData: any = [];
  const newPath = arrFiles.map(i => {
    const varValue = testVarType(i, args);
    return varValue;
  });
  arrData = getCtData(newPath.join('.'));

  console.log({ arrData });

  //   objData &&
  //     objData.assets.forEach(async (currData: any, idx: number) => {
  //       const time = Date.now().toString();
  //       const strRefFile = ref(storage, `images/` + time + currData.name);
  //       console.log({ strRefFile });
  //       const file = objData.output[idx];
  //       console.log({ file });
  //       await uploadBytes(strRefFile, file);

  //       // ---------- set Return Functions
  //       const firestoreURL = await getDownloadURL(strRefFile);
  //       console.log({ firestoreURL });

  //       for (const currFunc of arrFuncs) await currFunc(args, firestoreURL, idx);
  //     });
};

