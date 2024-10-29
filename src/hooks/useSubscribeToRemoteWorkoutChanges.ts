import { useEffect, useRef } from 'react'

import subscribeToRemoteWorkoutChanges from '../utils/subscribeToRemoteWorkoutChanges'

import type { WorkoutStateChangeEvent, WorkoutErrorEvent, WorkoutDataReceivedEvent } from '..'

type SubscriptionCallbacks = {
  readonly onStateChange: (event: WorkoutStateChangeEvent) => void;
  readonly onError: (event: WorkoutErrorEvent) => void;
  readonly onDataReceived: (event: WorkoutDataReceivedEvent) => void;
}

const useSubscribeToRemoteWorkoutChanges = ({
  onStateChange,
  onError,
  onDataReceived,
}: SubscriptionCallbacks): void => {
  const onStateChangeRef = useRef(onStateChange)
  const onErrorRef = useRef(onError)
  const onDataReceivedRef = useRef(onDataReceived)

  useEffect(() => {
    const cancelSubscription = subscribeToRemoteWorkoutChanges({
      onStateChange: onStateChangeRef.current,
      onError: onErrorRef.current,
      onDataReceived: onDataReceivedRef.current,
    })

    return () => {
      cancelSubscription()
    }
  }, [])
}

export default useSubscribeToRemoteWorkoutChanges
