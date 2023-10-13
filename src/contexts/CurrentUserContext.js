import { createContext } from 'react';
import personAvatar from '../images/person-avatar.jpg';

export const defaultCurrentUser = {
    avatar: personAvatar,
    name: '...',
    about: '...',
}

export const CurrentUserContext = createContext();