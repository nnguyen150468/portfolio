import React, {useState, useEffect} from 'react'

export default function SkillBars({width, percent}) {
    const [value, setValue] = useState(0)

    useEffect(() => {
        setValue(percent*width)
    })
    
    let progress = percent*width;
    return (
        <div className="progress-div" style={{ width: width }}>
            <div style={{ width: `${progress}px` }} className="progress" />
        </div>
    )
}
