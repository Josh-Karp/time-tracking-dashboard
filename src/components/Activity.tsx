import clsx from "clsx";
import ellipsis from "../assets/icon-ellipsis.svg";
import exercise from '../assets/icon-exercise.svg';
import play from '../assets/icon-play.svg';
import self from '../assets/icon-self-care.svg';
import social from '../assets/icon-social.svg';
import study from '../assets/icon-study.svg';
import work from '../assets/icon-work.svg';

interface Frame {
    [period: string]: {
        current: number;
        previous: number;
    }
}

interface TimeFrame {
    title: string;
    timeframes: Frame
    period: string;
}

interface Variant {
    [key: string]: {
        color: string;
        icon: string;
    };
}

const FRAME_VARIANT: Variant = {
    work: {
        color: 'bg-orange',
        icon: work,
    },
    play: {
        color: 'bg-soft-blue',
        icon: play,
    },
    study: {
        color: 'bg-light-red',
        icon: study
    },
    exercise: {
        color: 'bg-lime-green',
        icon: exercise
    },
    social: {
        color: 'bg-violet',
        icon: social
    },
    'self care': {
        color: 'bg-soft-orange',
        icon: self
    }
}

function Activity({ title, timeframes, period }: TimeFrame) {
    return (
        <div className={clsx('z-0 relative h-full pt-11 rounded-xl overflow-hidden', FRAME_VARIANT[title.toLowerCase()].color)}>
            <img className='z-10 w-18 absolute -top-2 right-4 opacity-80' src={FRAME_VARIANT[title.toLowerCase()].icon} alt={title} />
            <div className='z-20 relative cursor-pointer p-6 rounded-xl bg-dark-blue transition-opacity bg-opacity-100 hover:bg-opacity-80'>
                <div className="flex justify-between pb-6">
                    <p>{title}</p>
                    <img className='object-contain cursor-pointer' src={ellipsis} alt="Options" />
                </div>
                <h1 className="text-6xl pb-4">{timeframes[period].current}hrs</h1>
                <p className="opacity-50 text-sm">Last Week - {timeframes[period].previous}hrs</p>
            </div>
        </div>
    )
}

export default Activity