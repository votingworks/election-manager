
export const isAvailable = () => {
  return !!window.kiosk
}

export const isPresent = async () => {
  return isAvailable() && ((await window.kiosk!.getUsbDrives()).length > 0)
}

const getDevice = async () => {
  return (await window.kiosk!.getUsbDrives())[0]
}

const isDeviceMounted = (device : KioskBrowser.UsbDrive) => {
  return !!(device && device.mountPoint)
}

export const isMounted = async () : Promise<boolean> => {
  if (!isAvailable()) {
    return false
  }

  const device = await getDevice()
  return isDeviceMounted(device)
}

export const doMount = async () => {
  if (!isAvailable()) {
    return
  }

  const device = await getDevice()
  if (isDeviceMounted(device)) {
    return
  }

  window.kiosk!.mountUsbDrive(device.deviceName)
}

export const doUnmount = async () => {
  if (!isAvailable()) {
    return
  }

  const device = await getDevice()
  if (!isDeviceMounted(device)) {
    return
  }
  
  window.kiosk!.unmountUsbDrive(device.deviceName)
}

