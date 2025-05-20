import Native from '../native-types'

const pauseMirroringWorkoutSession: () => Promise<boolean> = async () => Native.pauseMirroringWorkoutSession()

export default pauseMirroringWorkoutSession
