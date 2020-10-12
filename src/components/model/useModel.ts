import { useCallback, useContext, useEffect } from 'react';
import modelsContext from './modelsContext';

export default function useModel(modelName: String) {
  const { registerModel, unRegisterModel, getModelByName } = useContext(
    modelsContext
  );

  useEffect(() => () => unRegisterModel(modelName), [
    modelName, 
    unRegisterModel
  ]);

  const getModel = useCallback(() => getModelByName(modelName),[
    modelName,
    getModelByName
  ])


  return { registerModel, getModel}
}
