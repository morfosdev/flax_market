
// ---------- import Local Tools
import { getDownloadURL, getStorage, ref, uploadBytes } from 'firebase/storage';
import { getCtData, testVarType } from '../../project';

type Tprops = {
  args: any;
  pass: { fbInit: any[]; arrFiles: any[]; arrFuncs: any[] };
};

export const uploadFileTool = async (props: Tprops) => {
  console.log('UPLOAD DE ARQUIVOS');
  // ---------- set Props
  const { args, pass } = props;
  const { arrFiles, arrFuncs } = pass;
  const fbInit = getCtData('all.temp.fireInit');
  console.log({ fbInit, arrFiles, arrFuncs, getStorage });

  // -----------------------------
  // -------- set Firestore Call 1
  // -----------------------------
  const storage = getStorage(fbInit);
  console.log({ storage });

  // ------ read Data
  let arrData: any = [];
  console.log({ arrData, arrFiles });

  const newPath = arrFiles.map(i => {
    console.log({ i });
    const varValue = testVarType(i, args);
    return varValue;
  });

  console.log({ newPath });

  const value = getCtData(newPath.join('.'));
  console.log({ value });

  const isArray = Array.isArray(value);
  console.log({ isArray });

  arrData = isArray ? value : [value];

  console.log({ arrData });

  if (arrData && arrData.length) {
    for (const idx in arrData) {
      const currData: any = arrData[idx as any];

      console.log('INIT LOOP UPLOAD', currData, Number(idx));

      const time = Date.now().toString();
      const strRefFile = ref(storage, `images/` + time + currData.name);
      console.log({ strRefFile });

      const file = currData;
      console.log({ file });

      await uploadBytes(strRefFile, file);

      const firestoreURL = await getDownloadURL(strRefFile);
      console.log({ firestoreURL });

      for (const currFunc of arrFuncs) {
        console.log({ currFunc });
        await currFunc(firestoreURL, Number(idx), args);
      }
    }
  }
};

