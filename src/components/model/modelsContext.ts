import React, { ReactNode } from 'react';


export interface CarModel {
  modelName: string
  overLayNode: ReactNode
  sectionRef: React.RefObject<HTMLElement>

}

interface ModelsContext {
  wrapperRef: React.RefObject<HTMLElement>
  registeredModel: CarModel[]
  registerModel: (model: CarModel) => void
  unRegisterModel: (modelName: String) => void
  getModelByName: (modelName: String) => CarModel | null

}


export default React.createContext<ModelsContext>({} as ModelsContext)