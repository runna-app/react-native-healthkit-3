import { EventEmitter } from '../native-types'

import type { WorkoutStateChangeEvent, WorkoutErrorEvent, WorkoutDataReceivedEvent } from '..'

type SubscriptionCallbacks = {
  readonly onStateChange: (event: WorkoutStateChangeEvent) => void;
  readonly onError: (event: WorkoutErrorEvent) => void;
  readonly onDataReceived: (event: WorkoutDataReceivedEvent) => void;
}

const subscribeToRemoteWorkoutChanges = ({
  onStateChange,
  onError,
  onDataReceived,
}: SubscriptionCallbacks): (() => void) => {
  const subscriptions = [
    EventEmitter.addListener('onRemoteWorkoutStateChange', onStateChange),
    EventEmitter.addListener('onRemoteWorkoutError', onError),
    EventEmitter.addListener('onRemoteWorkoutDataReceived', onDataReceived),
  ]

  return () => {
    subscriptions.forEach((subscription) => subscription.remove())
  }
}

export default subscribeToRemoteWorkoutChanges
