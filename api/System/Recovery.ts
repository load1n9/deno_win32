/// Auto-generated by Deno Win32: Windows.Win32.System.Recovery.Apis

import * as util from "../../util.ts";

// Enums
export type REGISTER_APPLICATION_RESTART_FLAGS = number;

// Constants
export const RESTART_NO_CRASH = 1;
export const RESTART_NO_HANG = 2;
export const RESTART_NO_PATCH = 4;
export const RESTART_NO_REBOOT = 8;

// Structs

export type HRESULT = number;

export type PWSTR = Deno.PointerValue | Uint8Array | null;

export type HANDLE = number | bigint;

export type BOOL = number;

// Native Libraries

try {
  var libKERNEL32_dll = Deno.dlopen("KERNEL32.dll", {
    RegisterApplicationRecoveryCallback: {
      parameters: ["pointer", "pointer", "u32", "u32"],
      result: "pointer",
    },
    UnregisterApplicationRecoveryCallback: {
      parameters: [],
      result: "pointer",
    },
    RegisterApplicationRestart: {
      parameters: ["buffer", "u32"],
      result: "pointer",
    },
    UnregisterApplicationRestart: {
      parameters: [],
      result: "pointer",
    },
    GetApplicationRecoveryCallback: {
      parameters: ["pointer", "pointer", "pointer", "pointer", "pointer"],
      result: "pointer",
    },
    GetApplicationRestartSettings: {
      parameters: ["pointer", "buffer", "pointer", "pointer"],
      result: "pointer",
    },
    ApplicationRecoveryInProgress: {
      parameters: ["pointer"],
      result: "pointer",
    },
    ApplicationRecoveryFinished: {
      parameters: ["i32"],
      result: "void",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function RegisterApplicationRecoveryCallback(
  pRecoveyCallback: Uint8Array | Deno.PointerValue | null /* Windows.Win32.System.WindowsProgramming.APPLICATION_RECOVERY_CALLBACK */,
  pvParameter: Deno.PointerValue | Uint8Array | null /* ptr */,
  dwPingInterval: number /* u32 */,
  dwFlags: number /* u32 */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libKERNEL32_dll.RegisterApplicationRecoveryCallback(util.toPointer(pRecoveyCallback), util.toPointer(pvParameter), dwPingInterval, dwFlags));
}

export function UnregisterApplicationRecoveryCallback(): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libKERNEL32_dll.UnregisterApplicationRecoveryCallback());
}

export function RegisterApplicationRestart(
  pwzCommandline: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  dwFlags: REGISTER_APPLICATION_RESTART_FLAGS /* Windows.Win32.System.Recovery.REGISTER_APPLICATION_RESTART_FLAGS */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libKERNEL32_dll.RegisterApplicationRestart(util.pwstrToFfi(pwzCommandline), dwFlags));
}

export function UnregisterApplicationRestart(): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libKERNEL32_dll.UnregisterApplicationRestart());
}

export function GetApplicationRecoveryCallback(
  hProcess: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pRecoveryCallback: Deno.PointerValue | Uint8Array | null /* ptr */,
  ppvParameter: Deno.PointerValue | Uint8Array | null /* ptr */,
  pdwPingInterval: Deno.PointerValue | Uint8Array | null /* ptr */,
  pdwFlags: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libKERNEL32_dll.GetApplicationRecoveryCallback(util.toPointer(hProcess), util.toPointer(pRecoveryCallback), util.toPointer(ppvParameter), util.toPointer(pdwPingInterval), util.toPointer(pdwFlags)));
}

export function GetApplicationRestartSettings(
  hProcess: Uint8Array | Deno.PointerValue | null /* Windows.Win32.Foundation.HANDLE */,
  pwzCommandline: string | null | Uint8Array | Uint16Array /* Windows.Win32.Foundation.PWSTR */,
  pcchSize: Deno.PointerValue | Uint8Array | null /* ptr */,
  pdwFlags: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libKERNEL32_dll.GetApplicationRestartSettings(util.toPointer(hProcess), util.pwstrToFfi(pwzCommandline), util.toPointer(pcchSize), util.toPointer(pdwFlags)));
}

export function ApplicationRecoveryInProgress(
  pbCancelled: Deno.PointerValue | Uint8Array | null /* ptr */,
): Deno.PointerValue | null /* Windows.Win32.Foundation.HRESULT */ {
  return util.pointerFromFfi(libKERNEL32_dll.ApplicationRecoveryInProgress(util.toPointer(pbCancelled)));
}

export function ApplicationRecoveryFinished(
  bSuccess: boolean /* Windows.Win32.Foundation.BOOL */,
): void /* void */ {
  return libKERNEL32_dll.ApplicationRecoveryFinished(util.boolToFfi(bSuccess));
}

