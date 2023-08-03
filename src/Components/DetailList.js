import React, { useEffect, useState } from 'react'
import { getListDetail } from '../Service/DataService'
import { useParams } from 'react-router-dom'
import { Link } from 'react-router-dom'
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend } from 'recharts';

function DetailList() {
    const data = [
        { name: 'Category 1', value: 10 },
        { name: 'Category 2', value: 15 },
        { name: 'Category 3', value: 8 },
        { name: 'Category 4', value: 20 },
        { name: 'Category 5', value: 5 },
    ];

    const { names } = useParams()
    const [
        {
            abilities,
            base_experience,
            forms,
            game_indices,
            height,
            held_items,
            id,
            is_default,
            location_area_encounters,
            moves,
            name,
            order,
            past_types,
            species,
            sprites,
            stats,
            types,
            weight,
        }, setDetailData] = useState({
            abilities: [],
            base_experience: '',
            forms: [],
            game_indices: [],
            height: '',
            held_items: [],
            id: '',
            is_default: '',
            location_area_encounters: '',
            moves: [],
            name: '',
            order: '',
            past_types: [],
            species: {},
            sprites: {},
            stats: [],
            types: [],
            weight: ''
        })
    console.log(name)
    useEffect(() => {
        getDataDetail()
    }, [])

    const getDataDetail = async () => {
        try {
            const resp = await getListDetail(names)
            if (resp.data) {
                const detailData = resp.data
                setDetailData({ ...detailData })
            } else {
                console.error('Error fetching data:');
            }
        } catch (error) {
            console.error('Error fetching data:', error);
        }
    }


    const maxValue = Math.max(...data.map((item) => item.value));
    const totalWidth = 100;

    return (
        <div>
            <div className='bg-white rounded-lg shadow-lg p-4 m-11'>
                <div className="flex justify-center">
                    <img
                        src={sprites.front_default}
                        alt="Image Not Found"
                        className="w-60 h-60 rounded-lg shadow-lg"
                    />
                </div>
                <div className="flex justify-center mt-6">
                    <div className="grid grid-cols-1 place-content-center">
                        <h2 className='text-xl font-bold mb-2'>Name : {names}</h2>
                        <h2 className='text-xl font-bold mb-2'>Species : {species.name}</h2>
                        <h2 className='text-xl font-bold mb-2'>Height : {height}</h2>
                    </div>
                </div>

                <div className='grid grid-cols-2 gap-4'>
                    <div className='border border-none'>
                        <h2 className='text-md font-bold my-3'>Ability</h2>
                        <table className="table-auto w-full">
                            <thead>
                                <tr>
                                    <th className="border px-4 py-2">Name</th>
                                </tr>
                            </thead>
                            <tbody>
                                {abilities?.map((item, index) => (
                                    <tr key={index} >
                                        <td className="border px-4 text-center py-2">{item.ability.name}</td>

                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                    <div className='border border-none'>
                        <h2 className='text-md font-bold my-3'>Stats</h2>
                        <div className="w-full bg-gray-200 rounded-lg p-4">
                            {stats.map((item, index) => (
                                <div
                                    key={index}
                                    className="flex items-center mb-2"
                                >
                                    <div className="w-20 text-right pr-2">{item.stat.name}</div>
                                    <div className="relative flex items-center w-full h-8 bg-blue-500 rounded-lg">
                                        <div
                                            className="h-full bg-blue-700 rounded-lg"
                                            style={{
                                                width: `${(item.base_stat / maxValue) * totalWidth}px`,
                                            }}
                                        ></div>
                                        <div className="absolute inset-y-0 right-0 pr-2 text-white">
                                            {item.base_stat}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

        </div >
    );
}

export default DetailList;
