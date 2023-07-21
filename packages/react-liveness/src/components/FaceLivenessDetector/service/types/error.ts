/**
 * The liveness error states
 */

export enum LivenessErrorState {
  TIMEOUT = 'TIMEOUT',
  RUNTIME_ERROR = 'RUNTIME_ERROR',
  FRESHNESS_TIMEOUT = 'FRESHNESS_TIMEOUT',
  SERVER_ERROR = 'SERVER_ERROR',
  CAMERA_FRAMERATE_ERROR = 'CAMERA_FRAMERATE_ERROR',
  CAMERA_ACCESS_ERROR = 'CAMERA_ACCESS_ERROR',
  FACE_DISTANCE_ERROR = 'FACE_DISTANCE_ERROR',
  MULTIPLE_FACES_ERROR = 'MULTIPLE_FACES_ERROR',
  MOBILE_LANDSCAPE_ERROR = 'MOBILE_LANDSCAPE_ERROR',
}
