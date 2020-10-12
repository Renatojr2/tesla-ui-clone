import React, { useCallback, useRef, useState } from 'react';
import modelsContext, { CarModel } from '../modelsContext';
 
import OverlayModel from '../OverlayModel'
import { Container,OverLayRoot} from './styles';

const ModelWrapper: React.FC = ({ children }) => {
  const wrapperRef = useRef<HTMLDivElement>(null)

  const [registeredModel, setRegisteredModel] = useState<CarModel[]>([])

  const registerModel = useCallback((model: CarModel) => {
    setRegisteredModel(state => [...state, model])
  }, [])

  const unRegisterModel = useCallback((modelName: String) => {
    setRegisteredModel(state => state.filter(model => model.modelName !== modelName))
  }, [])

  const getModelByName = useCallback((modelName: String) => {
    return registeredModel.find(model => model.modelName === modelName) || null
  }, [registeredModel])



  return (
    <modelsContext.Provider value={
     { wrapperRef,
      registeredModel,
      registerModel,
      unRegisterModel,
      getModelByName
    }

    }>
      <Container ref={wrapperRef}>

        <OverLayRoot>
          {registeredModel.map(item => (
            <OverlayModel key={item.modelName} model={item}>{item.overLayNode}</OverlayModel>
          ))}
        </OverLayRoot>
        
        {children}
        
      </Container>
    </modelsContext.Provider>
  );
};

export default ModelWrapper;
