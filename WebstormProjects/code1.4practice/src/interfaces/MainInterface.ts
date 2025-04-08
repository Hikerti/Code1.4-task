export interface Data {
    id: number;
    title: string;
    img: string;
    genres: string[];
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