//Visibility Observer component. (HOC)
//
import React, { useState, useEffect, useRef } from 'react'

function useOnScreen(ref) {
    const [isVisible, setIsVisible] = useState(false)
    const observer = new IntersectionObserver(
        ([entry]) => {
            return setIsVisible(entry.isIntersecting)
        }, { threshold: 0.1 })

    useEffect(() => {
        observer.observe(ref.current)
        return () => {
            observer.disconnect()
        }
    }, [])
    return isVisible
}


const VisibilityObserver = Component => {
    const PassedComponent = props => {
        const ref = useRef()
        const onScreen = useOnScreen(ref)

        return <div ref={ref} >
            <Component {...props} isVisible={onScreen} />
        </div>
    }
    return PassedComponent;
}


export default VisibilityObserver;