import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../common/types';


export const useTypedSelector: TypedUseSelectorHook<RootState> = useSelector;
