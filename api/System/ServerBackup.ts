/// Auto-generated by Deno Win32: Windows.Win32.System.ServerBackup.Apis

import * as util from "../../util.ts";

// Enums
export type WSB_OB_STATUS_ENTRY_PAIR_TYPE = number;

// Constants
export const WSB_MAX_OB_STATUS_VALUE_TYPE_PAIR = 5;
export const WSB_MAX_OB_STATUS_ENTRY = 5;
export const WSBAPP_ASYNC_IN_PROGRESS = 7277946800340336644n;
export const WSB_OB_ET_UNDEFINED = 0;
export const WSB_OB_ET_STRING = 1;
export const WSB_OB_ET_NUMBER = 2;
export const WSB_OB_ET_DATETIME = 3;
export const WSB_OB_ET_TIME = 4;
export const WSB_OB_ET_SIZE = 5;
export const WSB_OB_ET_MAX = 6;

// Structs

export type PWSTR = Deno.PointerValue | Uint8Array | null;

/**
 * Windows.Win32.System.ServerBackup.WSB_OB_STATUS_ENTRY_VALUE_TYPE_PAIR (size: 16)
 */
export interface WSB_OB_STATUS_ENTRY_VALUE_TYPE_PAIR {
  /** Windows.Win32.Foundation.PWSTR */
  m_wszObStatusEntryPairValue: string | null | Uint8Array | Uint16Array;
  /** Windows.Win32.System.ServerBackup.WSB_OB_STATUS_ENTRY_PAIR_TYPE */
  m_ObStatusEntryPairType: WSB_OB_STATUS_ENTRY_PAIR_TYPE;
}

export const sizeofWSB_OB_STATUS_ENTRY_VALUE_TYPE_PAIR = 16;

export function allocWSB_OB_STATUS_ENTRY_VALUE_TYPE_PAIR(data?: Partial<WSB_OB_STATUS_ENTRY_VALUE_TYPE_PAIR>): Uint8Array {
  const buf = new Uint8Array(sizeofWSB_OB_STATUS_ENTRY_VALUE_TYPE_PAIR);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.m_wszObStatusEntryPairValue !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.m_wszObStatusEntryPairValue);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: i32
  if (data?.m_ObStatusEntryPairType !== undefined) view.setInt32(8, Number(data.m_ObStatusEntryPairType), true);
  // 0x0c: pad4
  return buf;
}

export class WSB_OB_STATUS_ENTRY_VALUE_TYPE_PAIRView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get m_wszObStatusEntryPairValue(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: i32
  get m_ObStatusEntryPairType(): number {
    return this.view.getInt32(8, true);
  }

  // 0x0c: pad4

  // 0x00: buffer
  set m_wszObStatusEntryPairValue(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, util.toBigInt(util.toPointer((this.buf as any)._f0)), true);
  }

  // 0x08: i32
  set m_ObStatusEntryPairType(value: number) {
    this.view.setInt32(8, value, true);
  }

  // 0x0c: pad4
}

/**
 * Windows.Win32.System.ServerBackup.WSB_OB_STATUS_ENTRY (size: 24)
 */
export interface WSB_OB_STATUS_ENTRY {
  /** u32 */
  m_dwIcon: number;
  /** u32 */
  m_dwStatusEntryName: number;
  /** u32 */
  m_dwStatusEntryValue: number;
  /** u32 */
  m_cValueTypePair: number;
  /** ptr */
  m_rgValueTypePair: Deno.PointerValue | Uint8Array | null;
}

export const sizeofWSB_OB_STATUS_ENTRY = 24;

export function allocWSB_OB_STATUS_ENTRY(data?: Partial<WSB_OB_STATUS_ENTRY>): Uint8Array {
  const buf = new Uint8Array(sizeofWSB_OB_STATUS_ENTRY);
  const view = new DataView(buf.buffer);
  // 0x00: u32
  if (data?.m_dwIcon !== undefined) view.setUint32(0, Number(data.m_dwIcon), true);
  // 0x04: u32
  if (data?.m_dwStatusEntryName !== undefined) view.setUint32(4, Number(data.m_dwStatusEntryName), true);
  // 0x08: u32
  if (data?.m_dwStatusEntryValue !== undefined) view.setUint32(8, Number(data.m_dwStatusEntryValue), true);
  // 0x0c: u32
  if (data?.m_cValueTypePair !== undefined) view.setUint32(12, Number(data.m_cValueTypePair), true);
  // 0x10: pointer
  if (data?.m_rgValueTypePair !== undefined) view.setBigUint64(16, data.m_rgValueTypePair === null ? 0n : util.toBigInt(util.toPointer(data.m_rgValueTypePair)), true);
  return buf;
}

export class WSB_OB_STATUS_ENTRYView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: u32
  get m_dwIcon(): number {
    return this.view.getUint32(0, true);
  }

  // 0x04: u32
  get m_dwStatusEntryName(): number {
    return this.view.getUint32(4, true);
  }

  // 0x08: u32
  get m_dwStatusEntryValue(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: u32
  get m_cValueTypePair(): number {
    return this.view.getUint32(12, true);
  }

  // 0x10: pointer
  get m_rgValueTypePair(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: u32
  set m_dwIcon(value: number) {
    this.view.setUint32(0, value, true);
  }

  // 0x04: u32
  set m_dwStatusEntryName(value: number) {
    this.view.setUint32(4, value, true);
  }

  // 0x08: u32
  set m_dwStatusEntryValue(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: u32
  set m_cValueTypePair(value: number) {
    this.view.setUint32(12, value, true);
  }

  // 0x10: pointer
  set m_rgValueTypePair(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }
}

/**
 * Windows.Win32.System.ServerBackup.WSB_OB_STATUS_INFO (size: 24)
 */
export interface WSB_OB_STATUS_INFO {
  /** System.Guid */
  m_guidSnapinId: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  m_cStatusEntry: number;
  /** ptr */
  m_rgStatusEntry: Deno.PointerValue | Uint8Array | null;
}

export const sizeofWSB_OB_STATUS_INFO = 24;

export function allocWSB_OB_STATUS_INFO(data?: Partial<WSB_OB_STATUS_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofWSB_OB_STATUS_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: pointer
  if (data?.m_guidSnapinId !== undefined) view.setBigUint64(0, data.m_guidSnapinId === null ? 0n : util.toBigInt(util.toPointer(data.m_guidSnapinId)), true);
  // 0x08: u32
  if (data?.m_cStatusEntry !== undefined) view.setUint32(8, Number(data.m_cStatusEntry), true);
  // 0x0c: pad4
  // 0x10: pointer
  if (data?.m_rgStatusEntry !== undefined) view.setBigUint64(16, data.m_rgStatusEntry === null ? 0n : util.toBigInt(util.toPointer(data.m_rgStatusEntry)), true);
  return buf;
}

export class WSB_OB_STATUS_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: pointer
  get m_guidSnapinId(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: u32
  get m_cStatusEntry(): number {
    return this.view.getUint32(8, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  get m_rgStatusEntry(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(16, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: pointer
  set m_guidSnapinId(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(0, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x08: u32
  set m_cStatusEntry(value: number) {
    this.view.setUint32(8, value, true);
  }

  // 0x0c: pad4

  // 0x10: pointer
  set m_rgStatusEntry(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(16, util.toBigInt(util.toPointer(value)), true);
  }
}

export type BOOLEAN = number;

/**
 * Windows.Win32.System.ServerBackup.WSB_OB_REGISTRATION_INFO (size: 32)
 */
export interface WSB_OB_REGISTRATION_INFO {
  /** Windows.Win32.Foundation.PWSTR */
  m_wszResourceDLL: string | null | Uint8Array | Uint16Array;
  /** System.Guid */
  m_guidSnapinId: Uint8Array | Deno.PointerValue | null;
  /** u32 */
  m_dwProviderName: number;
  /** u32 */
  m_dwProviderIcon: number;
  /** Windows.Win32.Foundation.BOOLEAN */
  m_bSupportsRemoting: Uint8Array | Deno.PointerValue | null;
}

export const sizeofWSB_OB_REGISTRATION_INFO = 32;

export function allocWSB_OB_REGISTRATION_INFO(data?: Partial<WSB_OB_REGISTRATION_INFO>): Uint8Array {
  const buf = new Uint8Array(sizeofWSB_OB_REGISTRATION_INFO);
  const view = new DataView(buf.buffer);
  // 0x00: buffer
  if (data?.m_wszResourceDLL !== undefined) {
    (buf as any)._f0 = util.pwstrToFfi(data.m_wszResourceDLL);
    view.setBigUint64(0, (buf as any)._f0 === null ? 0n : util.toBigInt(Deno.UnsafePointer.of((buf as any)._f0)), true);
  }
  // 0x08: pointer
  if (data?.m_guidSnapinId !== undefined) view.setBigUint64(8, data.m_guidSnapinId === null ? 0n : util.toBigInt(util.toPointer(data.m_guidSnapinId)), true);
  // 0x10: u32
  if (data?.m_dwProviderName !== undefined) view.setUint32(16, Number(data.m_dwProviderName), true);
  // 0x14: u32
  if (data?.m_dwProviderIcon !== undefined) view.setUint32(20, Number(data.m_dwProviderIcon), true);
  // 0x18: pointer
  if (data?.m_bSupportsRemoting !== undefined) view.setBigUint64(24, data.m_bSupportsRemoting === null ? 0n : util.toBigInt(util.toPointer(data.m_bSupportsRemoting)), true);
  return buf;
}

export class WSB_OB_REGISTRATION_INFOView {
  private readonly view: DataView;
  constructor(private readonly buf: Uint8Array) {
    this.view = new DataView(buf.buffer);
  }

  get buffer(): Uint8Array {
    return this.buf;
  }

  // 0x00: buffer
  get m_wszResourceDLL(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(0, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x08: pointer
  get m_guidSnapinId(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(8, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x10: u32
  get m_dwProviderName(): number {
    return this.view.getUint32(16, true);
  }

  // 0x14: u32
  get m_dwProviderIcon(): number {
    return this.view.getUint32(20, true);
  }

  // 0x18: pointer
  get m_bSupportsRemoting(): Uint8Array | Deno.PointerValue | null {
    const ptr = this.view.getBigUint64(24, true);
    return util.pointerFromFfi(ptr);
  }

  // 0x00: buffer
  set m_wszResourceDLL(value: Uint8Array | Deno.PointerValue | null) {
    (this.buf as any)._f0 = value;
    this.view.setBigUint64(0, util.toBigInt(util.toPointer((this.buf as any)._f0)), true);
  }

  // 0x08: pointer
  set m_guidSnapinId(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(8, util.toBigInt(util.toPointer(value)), true);
  }

  // 0x10: u32
  set m_dwProviderName(value: number) {
    this.view.setUint32(16, value, true);
  }

  // 0x14: u32
  set m_dwProviderIcon(value: number) {
    this.view.setUint32(20, value, true);
  }

  // 0x18: pointer
  set m_bSupportsRemoting(value: Uint8Array | Deno.PointerValue | null) {
    this.view.setBigUint64(24, util.toBigInt(util.toPointer(value)), true);
  }
}

// Native Libraries

// Symbols

