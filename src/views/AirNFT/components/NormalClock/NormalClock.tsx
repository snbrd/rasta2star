import React, { useCallback, useEffect, useState } from 'react';
import './NormalClock.css';
// function component
const StaticCard = ({ position, digit }) => {
  return (
    <div className={position}>
      <span>{digit > 0 ? digit : "00"}</span>
    </div>
  );
};

// function component
const NormalUnitContainer = ({ digit, unit = 'time', countdown }) => {
  // assign digit values
  let currentDigit = digit;
  let previousDigit;
  if (countdown) {
    previousDigit = digit + 1;

    // to prevent a negative value
    if (unit !== 'hours') {
      previousDigit = previousDigit === 60 ? 59 : previousDigit;
    } else {
      previousDigit = previousDigit === 24 ? 23 : previousDigit;
    }
  }
  // add zero
  if (currentDigit < 10) {
    currentDigit = `0${currentDigit}`;
  }
  if (previousDigit < 10) {
    previousDigit = `0${previousDigit}`;
  }

  return (
    <div className='NormalUnitContainer'>
      <StaticCard position='NormalupperCard' digit={currentDigit} />

      <div className="digitLabel">
        <label>
          {unit}
        </label>
      </div>
    </div>
  );
};

function getTimeRemaining(endtime) {
  const t = Date.parse(endtime) - new Date().getTime();
  const days = Math.floor(t / (1000 * 60 * 60 * 24));
  const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
  const minutes = Math.floor((t / 1000 / 60) % 60);
  const seconds = Math.floor((t / 1000) % 60);
  return {
    time: t,
    days,
    hours,
    minutes,
    seconds,
  };
}

export interface ExpandableSectionProps {
  countdown?: any
}

// class component
const NormalClock: React.FC<ExpandableSectionProps> = ({
  countdown
}) => {
  const [day, setDays] = useState(0)
  const [hour, setHours] = useState(0)
  const [minute, setMinutes] = useState(0)
  const [second, setSeconds] = useState(0)

  const updateTime = useCallback(
    () => {
      const { days, hours, minutes, seconds } = getTimeRemaining(
        countdown
      );

      if (days !== day) {
        setDays(days)
      }

      // on hour change, update hours and shuffle state
      if (hours !== hour) {
        setHours(hours)
      }
      // on minute change, update minutes and shuffle state
      if (minutes !== minute) {
        setMinutes(minutes)
      }
      // on second change, update seconds and shuffle state
      if (seconds !== second) {
        setSeconds(seconds)
      }
    },
    [countdown, day, hour, minute, second],
  )
  useEffect(() => {
    const timer = setInterval(() => updateTime(), 50);
    return () => {
      clearInterval(timer)
    }
  }, [updateTime])

  // state object destructuring
  return (
    <div className='NormalClock'>
      <NormalUnitContainer countdown={countdown} unit='days' digit={day} />
      <NormalUnitContainer
        countdown={countdown}
        unit='hours'
        digit={hour}
      />
      <NormalUnitContainer
        countdown={countdown}
        unit='minutes'
        digit={minute}
      />
      <NormalUnitContainer
        countdown={countdown}
        unit='seconds'
        digit={second}
      />
    </div>
  );
}

export default NormalClock;
