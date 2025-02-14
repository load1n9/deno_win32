/// Auto-generated by Deno Win32: Windows.Win32.System.Memory.NonVolatile.Apis

import * as util from "../../../util.ts";

// Structs

/**
 * Windows.Win32.System.Memory.NonVolatile.NV_MEMORY_RANGE (size: 16)
 */
export interface NV_MEMORY_RANGE {
  /** ptr */
  BaseAddress: Deno.PointerValue | Uint8Array | null;
  /** usize */
  Length: number | bigint;
}

export const sizeofNV_MEMORY_RANGE = 16;

export function allocNV_MEMORY_RANGE(data?: Partial<NV_MEMORY_RANGE>): Uint8Array {
  const buf = new Uint8Array(sizeofNV_MEMORY_RANGE);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.BaseAddress !== undefined) view.setBigUint64(0, data.BaseAddress === null ? 0n : util.toBigInt(util.toPointer(data.BaseAddress)), true);
  // 0x08: usize
  if (data?.Length !== undefined) view.setBigUint64(8, util.toBigInt(data.Length), true);
  return buf;
}

export class NV_MEMORY_RANGEView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get BaseAddress(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: usize
  get Length(): number | bigint {
    return this.view.getBigUint64(8, true);
  }

  // 0x00: pointer
  set BaseAddress(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: usize
  set Length(value: number | bigint) {
    this.view.setBigUint64(8, util.toBigInt(value), true);
  }
}

// Native Libraries

try {
  var libntdll_dll = Deno.dlopen("ntdll.dll", {
    RtlGetNonVolatileToken: {
      parameters: ["pointer", "usize", "pointer"],
      result: "u32",
    },
    RtlFreeNonVolatileToken: {
      parameters: ["pointer"],
      result: "u32",
    },
    RtlFlushNonVolatileMemory: {
      parameters: ["pointer", "pointer", "usize", "u32"],
      result: "u32",
    },
    RtlDrainNonVolatileFlush: {
      parameters: ["pointer"],
      result: "u32",
    },
    RtlWriteNonVolatileMemory: {
      parameters: ["pointer", "pointer", "pointer", "usize", "u32"],
      result: "u32",
    },
    RtlFillNonVolatileMemory: {
      parameters: ["pointer", "pointer", "usize", "u8", "u32"],
      result: "u32",
    },
    RtlFlushNonVolatileMemoryRanges: {
      parameters: ["pointer", "pointer", "usize", "u32"],
      result: "u32",
    },
  }).symbols;
} catch(e) { /* ignore */ }

// Symbols

export function RtlGetNonVolatileToken(
  NvBuffer: Deno.PointerValue | Uint8Array | null /* ptr */,
  Size: number | bigint /* usize */,
  NvToken: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libntdll_dll.RtlGetNonVolatileToken(util.toPointer(NvBuffer), util.toBigInt(util.toPointer(Size)), util.toPointer(NvToken));
}

export function RtlFreeNonVolatileToken(
  NvToken: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libntdll_dll.RtlFreeNonVolatileToken(util.toPointer(NvToken));
}

export function RtlFlushNonVolatileMemory(
  NvToken: Deno.PointerValue | Uint8Array | null /* ptr */,
  NvBuffer: Deno.PointerValue | Uint8Array | null /* ptr */,
  Size: number | bigint /* usize */,
  Flags: number /* u32 */,
): number /* u32 */ {
  return libntdll_dll.RtlFlushNonVolatileMemory(util.toPointer(NvToken), util.toPointer(NvBuffer), util.toBigInt(util.toPointer(Size)), Flags);
}

export function RtlDrainNonVolatileFlush(
  NvToken: Deno.PointerValue | Uint8Array | null /* ptr */,
): number /* u32 */ {
  return libntdll_dll.RtlDrainNonVolatileFlush(util.toPointer(NvToken));
}

export function RtlWriteNonVolatileMemory(
  NvToken: Deno.PointerValue | Uint8Array | null /* ptr */,
  NvDestination: Deno.PointerValue | Uint8Array | null /* ptr */,
  Source: Deno.PointerValue | Uint8Array | null /* ptr */,
  Size: number | bigint /* usize */,
  Flags: number /* u32 */,
): number /* u32 */ {
  return libntdll_dll.RtlWriteNonVolatileMemory(util.toPointer(NvToken), util.toPointer(NvDestination), util.toPointer(Source), util.toBigInt(util.toPointer(Size)), Flags);
}

export function RtlFillNonVolatileMemory(
  NvToken: Deno.PointerValue | Uint8Array | null /* ptr */,
  NvDestination: Deno.PointerValue | Uint8Array | null /* ptr */,
  Size: number | bigint /* usize */,
  Value: number /* u8 */,
  Flags: number /* u32 */,
): number /* u32 */ {
  return libntdll_dll.RtlFillNonVolatileMemory(util.toPointer(NvToken), util.toPointer(NvDestination), util.toBigInt(util.toPointer(Size)), Value, Flags);
}

export function RtlFlushNonVolatileMemoryRanges(
  NvToken: Deno.PointerValue | Uint8Array | null /* ptr */,
  NvRanges: Deno.PointerValue | Uint8Array | null /* ptr */,
  NumRanges: number | bigint /* usize */,
  Flags: number /* u32 */,
): number /* u32 */ {
  return libntdll_dll.RtlFlushNonVolatileMemoryRanges(util.toPointer(NvToken), util.toPointer(NvRanges), util.toBigInt(util.toPointer(NumRanges)), Flags);
}

