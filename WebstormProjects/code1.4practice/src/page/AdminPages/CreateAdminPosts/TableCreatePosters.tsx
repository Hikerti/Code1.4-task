import React, {useEffect} from "react";
import {useForm} from "react-hook-form";
import {AdminFormPost} from "../../../interfaces/MainInterface.ts";
import {useCreatePosterMutation} from "../../../stor/API/postersAPIPost.ts";

const TableCreatePosters: React.FC = () => {
    const [createPoster, { isLoading, error }] = useCreatePosterMutation();
    const {
        register,
        handleSubmit,
        formState: { errors },
        setValue
    } = useForm<AdminFormPost>()

    useEffect(() => {
        register('genres', { required: 'Обязательное поле' });
    }, [register]);

    if (isLoading) {
        return (
            <div>
                ...Loading
            </div>
        )
    }

    if (error) {
        return (
            <div>
                ...Error
            </div>
        )
    }

    const GenresIsArray = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        const validArr = value.split(',')
            .map(elem => elem.trim())
            .filter(Boolean);
        setValue('genres', validArr);
    }

    const HandleSubmit = async (data: AdminFormPost) => {
        const result = await createPoster(data).unwrap()
        console.log(result)
    }

    return (
        <form
            onSubmit={handleSubmit(HandleSubmit)}
            className='w-8/10 flex flex-col gap-2'
            action="">
            <input className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                   type="text"
                   placeholder={errors.title ? errors.title.message : 'Title'}
                   {...register('title', {required: 'Обязательное поле'})}
            />
            <input
                className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                type="text"
                placeholder={errors.description ? errors.description.message :'Description'}
                {...register('description', {required: 'Обязательное поле'})}
            />
            <input
                className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                type="text"
                placeholder={errors.img ? errors.img.message : 'Img'}
                {...register('img', {required: 'Обязательное поле'})}
            />
            <input
                className='w-full bg-gray-100 shadow-2xl p-2 rounded-[5px] outline-0
                        placeholder:text-xs
                        xl:placeholder:text-lg'
                type="text"
                placeholder={errors.genres ? errors.genres.message : 'Genres'}
                onChange={GenresIsArray}
            />
            <button
                type='submit'
                className='w-full bg-red-500 text-white
                    font-family-primary-bold text-[0.5rem] py-[10px] rounded-xl duration-200
                    hover:text-gray-200 hover:bg-red-600
                    sm:text-[1.75rem]'
            >
                Добавить
            </button>
        </form>
    )
};

export default TableCreatePosters;