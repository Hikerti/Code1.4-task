export interface Data {
    id: number;
    title: string;
    img: string;
    genres: string[];
}

export interface DataIndexFetch {
    id: number | undefined;
    title: string | undefined;
    img: string | undefined;
    genres: string[] | undefined;
    description: string | undefined;
}


export interface CardProps {
    index: number;
    title: string;
    img: string;
    genres: string[];
}

export interface ModalShopProps {
    showShop: boolean;
    setShowShop: (showShop: boolean) => void;
}

export interface ModalUserProps {
    showUser: boolean;
    setShowUser: (showShop: boolean) => void;
}

export interface ArrowRightProps {
    value: number;
    setValue: (value: number) => void;
    posts: Data[] | undefined;
}

export interface ArrowLeftProps {
    value: number;
    setValue: (value: number) => void;
}

export interface RegistrationButtonProps {
    setRegisterModal: (registerModal: boolean) => void;
}

export type UserRegistration = {
    name: string,
    surname: string,
    patronymic: string,
    login: string,
    email: string,
    password: string,
    repeatPassword: string,
    rules: boolean,
}

export type EntryForm = {
    login: string;
    email: string;
    password: string;
    repeatPassword: string;
}

export interface AdminFormPost {
    title: string;
    description: string;
    img: string;
    genres: string[];
}