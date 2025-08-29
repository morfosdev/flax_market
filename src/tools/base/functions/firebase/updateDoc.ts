
// ---- updateDoc.ts
// ---------- import Local Tools
import { getFirestore, doc, updateDoc, Timestamp } from 'firebase/firestore';
import { getCtData, testVarType } from '../../project';

export const css1 =
  'color: #ffb73b; background-color: black; font-size: 11px; padding: 2px 6px; border-radius: 3px';
export const css2 =
  'color: black; background-color: #ffb73b; font-size: 10px; padding: 2px 6px; border-radius: 3px';

type Tprops = {
  args: any;
  pass: {
    arrRefStrings: string[];
    arrPathData: string[];
    arrFuncs: any[];
  };
};

export const updateDocTool = async (props: Tprops) => {
  // ---------- set Props
  const { args, pass } = props;
  const { arrRefStrings, arrPathData, arrFuncs } = pass;

  // -----------------------------
  // ---------- set Firestore Call
  // -----------------------------
  // dentro do updateDocTool, logo após montar newArrStringRefs:
  const newArrStringRefs = arrRefStrings.map(i => testVarType(i, args));
  console.log('3', { newArrStringRefs });

  // validação dos segmentos
  const hasBadRef =
    !Array.isArray(newArrStringRefs) ||
    newArrStringRefs.length === 0 ||
    newArrStringRefs.some(s => typeof s !== 'string' || !s.length);

  if (hasBadRef) {
    console.log('updateDocTool: referência inválida para Firestore doc()', {
      arrRefStrings,
      newArrStringRefs,
    });
    return; // evita chamar doc() com undefined
  }

  console.log('3', { newArrStringRefs });

  const fbInit = getCtData('all.temp.fireInit');
  console.log(fbInit);
  const fireInit: any = getFirestore(fbInit);
  console.log({ arrRefStrings });
  const refColl = doc(fireInit, ...newArrStringRefs);

  // ------ check Data
  if (!Array.isArray(arrRefStrings))
    return console.log(
      'arrRefStrings needs to be a string array',
      arrRefStrings,
    );

  // ------ read Data
  let dataToUpdate: any = {};

  // Resolve cada item de arrPathData com testVarType.
  // - Se o item for '$var_...' e apontar para um path completo, já vem o VALOR (objeto/array/prim).
  // - Se for literal de caminho, permanece string (ex.: 'sc.a0.forms.iptsChanges').
  const resolvedParts = (arrPathData || []).map(i => testVarType(i, args));

  const onlyOneStringPath =
    resolvedParts.length === 1 && typeof resolvedParts[0] === 'string';

  const allStrings =
    resolvedParts.length > 0 && resolvedParts.every(i => typeof i === 'string');

  // (1) Array com caminho direto: ['sc.a0.forms.iptsChanges']
  if (onlyOneStringPath) {
    const obj = getCtData(resolvedParts[0] as string);
    if (obj && typeof obj === 'object') dataToUpdate = Object.assign({}, obj);
    else dataToUpdate = {}; // garante objeto
  }
  // (2) Caminho dinâmico por segmentos (tudo string): ['sc.', '$var_all.currScreen', 'a0.forms.iptsChanges']
  else if (allStrings) {
    const fullPath = (resolvedParts as string[]).join('');
    const obj = getCtData(fullPath);
    if (obj && typeof obj === 'object') dataToUpdate = Object.assign({}, obj);
    else dataToUpdate = {}; // garante objeto
  }
  // (3) Achatar múltiplas fontes num único objeto
  else {
    // Cada parte pode ser:
    // - objeto já resolvido (via $var_...)
    // - string com caminho (vamos ler com getCtData)
    for (const part of resolvedParts) {
      if (!part) continue;

      if (typeof part === 'string') {
        const val = getCtData(part);
        if (val && typeof val === 'object') Object.assign(dataToUpdate, val);
      } else if (typeof part === 'object') {
        Object.assign(dataToUpdate, part);
      }
      // se for primitivo, ignora para manter dataToUpdate como objeto
    }
  }

  console.log({ arrPathData, resolvedParts, dataToUpdate });

  const dateNow = Timestamp.now();
  console.log({ dateNow });
  // ------ add date update
  dataToUpdate.updatedAt = Timestamp.now();

  await updateDoc(refColl, dataToUpdate).catch(err =>
    console.log('Erro do updateDoc', { err }),
  );

  // ---------- set Get Value Functions
  for (const currFunc of arrFuncs) await currFunc(dataToUpdate, args);

  console.log('%cupdateDoc ok', css1);
  console.log('%cReferencia do Documento', css2, {
    newArrStringRefs,
    dataToUpdate,
  });

  return dataToUpdate;
};

