const WINDOW_ACTION = 'WINDOW_ACTION';

export default ({ getState }) => next => action => {
  if(!action[WINDOW_ACTION])
    return next(action);

  const { targetWindow, targetOrigin, targetAction } = action[WINDOW_ACTION];

  const message = JSON.stringify(targetAction);
  targetWindow.postMessage(message, targetOrigin)
}

export const createWindowAction = (targetWindow, targetOrigin, targetAction) => {
  return {
    [WINDOW_ACTION]: {
      targetWindow,
      targetOrigin,
      targetAction
    }
  }
}
