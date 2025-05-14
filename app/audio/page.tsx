import { IconButton } from '@mui/material'
import React from 'react'
import MenuIcon from "@mui/icons-material/Menu"
import CircularAudioPlayer from '@/components/CircularAudioBar'

export default function Audio() {
    return (
        <div className='min-h-96 bg-gradient-to-t from-ronchi to-sunflower rounded-2xl m-10 max-w-7xl p-10'>
            <div className='grid grid-cols-3'>
                <div className='flex justify-start'><IconButton
                    color='inherit'
                    edge='end'
                    sx={{ margin: '20px' }}
                >
                    <MenuIcon />
                </IconButton></div>
                <div className='flex justify-center'>
                    <div>
                        <h1 className='text-3xl font-semibold text-dovegray'>Album Name</h1>
                    <p className='font-light text-dustygray'>Artist Name/ Album details</p>
                    </div>
                    </div>
                <div className='flex justify-end'><IconButton
                    color='inherit'
                    edge='end'
                    sx={{ margin: '20px' }}
                >
                    <MenuIcon />
                </IconButton></div>
            </div>
            <div className='flex justify-center'>
                <CircularAudioPlayer/>
            </div>
        </div>
    )
}
