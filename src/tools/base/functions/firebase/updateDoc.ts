
import { getFirestore, doc, updateDoc, serverTimestamp } from 'firebase/firestore';
// ...

export const updateDocTool = async (props: Tprops) => {
  const { args, pass } = props;
  const { arrRefStrings, arrPathData, arrFuncs } = pass;

  if (!Array.isArray(arrRefStrings)) {
    console.log('arrRefStrings needs to be a string array', arrRefStrings);
    return;
  }

  // Resolve refs
  const newArrStringRefs = arrRefStrings.map(i => testVarType(i, args));
  const fbInit = getCtData('all.temp.fireInit');
  const fireInit = getFirestore(fbInit);
  const refColl = doc(fireInit, ...newArrStringRefs);

  // Monta o objeto a atualizar
  const newPath = arrPathData.map(i => testVarType(i, args));
  const joinedPath = newPath.join('.');
  const raw = getCtData(joinedPath);

  // Garante objeto
  const dataToUpdate: Record<string, any> =
    raw && typeof raw === 'object' ? { ...raw } : {};

  // Selo de tempo do servidor
  dataToUpdate.updatedAt = serverTimestamp();

  try {
    await updateDoc(refColl, dataToUpdate);
    for (const currFunc of arrFuncs) await currFunc(dataToUpdate, args);

    console.log('%cupdateDoc ok', css1);
    console.log('%cReferencia do Documento', css2, { newArrStringRefs, joinedPath, dataToUpdate });
    return dataToUpdate;
  } catch (err) {
    console.log('Erro do updateDoc', { err, newArrStringRefs, joinedPath, raw });
  }
};
