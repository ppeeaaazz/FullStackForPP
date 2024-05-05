import React, { useState } from "react";
import InputSearch from "./components/InputSearch";
import TableProduct from "./components/TableProduct";
import Filter from "./components/Filter";
import { getStaticPaths } from "next";
import ModalForm from "./components/Modal/ModalForm";
import ModalDelete from "./components/Modal/ModalDelete";

const Home = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenModalForm, setIsOpenModalForm] = useState(false);
    const [isOpenModalDelete, setIsOpenModalDelete] = useState(false);

    return (
        <section className="bg-gray-50 dark:bg-gray-900 py-3 sm:py-5 ">
            <div className="mx-auto max-w-screen-4xl px-4">
                <div className="bg-white dark:bg-gray-800 relative shadow-md sm:rounded-lg overflow-hidden">
                    <div className="border-b dark:border-gray-700 mx-4">
                        <div className="flex items-center justify-between space-x-4 pt-3">
                            <div className="flex-1 flex items-center space-x-3">
                                <h5 className="dark:text-white font-semibold">
                                    All products
                                </h5>
                            </div>
                        </div>
                        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:space-x-4 py-3">
                            <div className="w-full lg:w-2/3 flex flex-col space-y-3 md:space-y-0 md:flex-row md:items-center">
                                <InputSearch />
                                <Filter isOpen={isOpen} setIsOpen={setIsOpen} />
                            </div>
                            <div className="w-full md:w-auto flex flex-col md:flex-row mb-3 md:mb-0 items-stretch md:items-center justify-end md:space-x-3 flex-shrink-0">
                                <div className="flex-shrink-0 flex flex-row items-center justify-end space-x-3">
                                    <button
                                        type="button"
                                        className="flex-shrink-0 flex items-center justify-center py-2 px-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-primary-700 focus:z-10 focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    >
                                        <svg
                                            className="mr-2 w-6 h-6"
                                            xmlns="http://www.w3.org/2000/svg"
                                            fill="none"
                                            viewbox="0 0 24 24"
                                            strokeWidth="2"
                                            stroke="currentColor"
                                            ariaHidden="true"
                                        >
                                            <path
                                                stroke-linecap="round"
                                                stroke-linejoin="round"
                                                d="M3 16.5v2.25A2.25 2.25 0 005.25 21h13.5A2.25 2.25 0 0021 18.75V16.5m-13.5-9L12 3m0 0l4.5 4.5M12 3v13.5"
                                            />
                                        </svg>
                                        Export
                                    </button>
                                </div>
                                <button
                                    type="button"
                                    className="flex items-center justify-center text-white bg-primary-700 hover:bg-primary-800 focus:ring-4 focus:ring-primary-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-primary-600 dark:hover:bg-primary-700 focus:outline-none dark:focus:ring-primary-800"
                                    onClick={() => setIsOpenModalForm(true)}
                                >
                                    <svg
                                        className="h-6 w-6 mr-2"
                                        fill="currentColor"
                                        viewbox="0 0 20 20"
                                        xmlns="http://www.w3.org/2000/svg"
                                        aria-hidden="true"
                                    >
                                        <path
                                            clip-rule="evenodd"
                                            fill-rule="evenodd"
                                            d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                                        />
                                    </svg>
                                    Add new product
                                </button>
                            </div>
                        </div>
                    </div>

                    <div className="overflow-x-auto">
                        <TableProduct
                            isOpenModalDelete={isOpenModalDelete}
                            setIsOpenModalDelete={setIsOpenModalDelete}
                            isOpenModalForm={isOpenModalForm}
                            setIsOpenModalForm={setIsOpenModalForm}
                        />
                    </div>
                </div>
            </div>
            <ModalForm
                isOpenModal={isOpenModalForm}
                setIsOpenModal={setIsOpenModalForm}
            />
            <ModalDelete
                isOpenModalDelete={isOpenModalDelete}
                setIsOpenModalDelete={setIsOpenModalDelete}
            />
        </section>
    );
};

export default Home;
