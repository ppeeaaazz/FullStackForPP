import React, { useEffect,useState } from "react";
import { getAllCategory, newProduct } from "../../../serviece/httpServiece";





const ModalForm = ({ isOpenModal, setIsOpenModal }) => {
    const [category, setCategory] = useState(null)
    const [status, setStatus] = useState(false)
    const [band, setBand] = useState(null)
    const [productName, setProductName] = useState(null)
    const [price, setPrice] = useState(null)
    const [categoryList, setCategoryList] = useState([])

    
    useEffect(()=>{
        getCategory()
    },[])
    const getCategory = async () => {
        const cateList = await getAllCategory({"xxx-key": 123456})

        setCategoryList(cateList)
    }
    

    const submitData = async () => {
        const data = {
            "productName": productName,
            "category": category,
            "brand": band,
            "price": parseInt(price),
            "staus": status
        }
        const result = await newProduct(data)
        console.log(result);
        if(result.code != 200){
            alert(result.data)
        } else {
            alert('Success !')
            setIsOpenModal(false)
        }
    }

    return (
        <>
            {isOpenModal && (
                <div
                    id="static-modal"
                    data-modal-backdrop="static"
                    tabindex="-1"
                    aria-hidden="true"
                    className="overflow-y-auto overflow-x-hidden fixed top-0 right-0 left-0 z-50 justify-center items-center w-full md:inset-0 h-[calc(100%-1rem)] max-h-full"
                >
                    <div className="relative p-4 w-full max-w-2xl max-h-full mx-auto">
                        <div className="relative bg-white rounded-lg shadow dark:bg-gray-700">
                            <div className="flex items-center justify-between p-4 md:p-5 border-b rounded-t dark:border-gray-600">
                                <h3 className="text-xl font-semibold text-gray-900 dark:text-white">
                                    Form
                                </h3>
                                <button
                                    type="button"
                                    className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm w-8 h-8 ms-auto inline-flex justify-center items-center dark:hover:bg-gray-600 dark:hover:text-white"
                                    data-modal-hide="static-modal"
                                    onClick={() => setIsOpenModal(false)}
                                >
                                    <svg
                                        className="w-3 h-3"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 14 14"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
                                        />
                                    </svg>
                                    <span className="sr-only">Close modal</span>
                                </button>
                            </div>
                            <div className="p-4 md:p-5 grid gap-2 grid-cols-1 sm:grid-cols-2">
                                <div className="">
                                    <form>
                                        <label
                                            for="countries"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Product
                                        </label>
                                        <input onChange={(e)=> {setProductName(e.target.value)}}
                                        type="text"
                                        id="base-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                    </form>
                                </div>
                                <div className="">
                                    <form>
                                        <label
                                            for="countries"
                                            className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                        >
                                            Category
                                        </label>
                                        <select onChange={(e)=> {setCategory(e.target.value)}}
                                            id="countries"
                                            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                        >
                                            <option>--please select--</option>
                                            {categoryList?.map((cate)=>{
                                                return <option value={cate.value}>{cate.title}</option>
                                            })}
                                        </select>
                                    </form>
                                </div>
                                <div className="">
                                    <label
                                        for="base-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Band
                                    </label>
                                    <input onChange={(e)=> {setBand(e.target.value)}}
                                        type="text"
                                        id="base-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    
                                    />
                                </div>
                                <div className="">
                                    <label
                                        for="base-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Price
                                    </label>
                                    <input onChange={(e)=> {setPrice(e.target.value)}}
                                        type="text"
                                        id="base-input"
                                        className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                    />
                                </div>

                                <div className="">
                                    <label
                                        for="base-input"
                                        className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                                    >
                                        Status
                                    </label>
                                    <label className="inline-flex items-center mb-5 cursor-pointer">
                                        <input onChange={(e)=> {setStatus(e.target.checked)}}
                                            type="checkbox"
                                            value=""
                                            className="sr-only peer"
                                        />
                                        <div className="relative w-11 h-6 bg-gray-200 peer-focus:outline-none peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all dark:border-gray-600 peer-checked:bg-blue-600"></div>
                                    </label>
                                </div>
                            </div>
                            <div className="flex items-center p-4 md:p-5 border-t border-gray-200 rounded-b dark:border-gray-600">
                                <button 
                                    data-modal-hide="static-modal"
                                    type="button"
                                    className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                                    onClick={() => submitData()}
                                >
                                    Confirm
                                </button>
                                <button
                                    data-modal-hide="static-modal"
                                    type="button"
                                    className="py-2.5 px-5 ms-3 text-sm font-medium text-gray-900 focus:outline-none bg-white rounded-lg border border-gray-200 hover:bg-gray-100 hover:text-blue-700 focus:z-10 focus:ring-4 focus:ring-gray-100 dark:focus:ring-gray-700 dark:bg-gray-800 dark:text-gray-400 dark:border-gray-600 dark:hover:text-white dark:hover:bg-gray-700"
                                    onClick={() => setIsOpenModal(false)}
                                >
                                    Cancel
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
};

export default ModalForm;
