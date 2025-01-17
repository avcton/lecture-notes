---
title: Architecture of the Computer System
date: 2023-09-11T17:29:58Z
lastmod: 2023-12-30T19:29:00Z
---

## Micro Processors

> The brain / controller of every device within the computer. Every device can have its own controller and that controller can be its micro processor.

* Each I/O device have its controller
* The controller has a *local buffer*
  * This buffer stores the data and then the communication between CPU and device starts
* The device controller on completing its task, informs the CPU through an interrupt that it’s operation has finished

## Registers

### Internal Registers

* MAR
* MBR
* I/O Address Register
* I/O Buffer Register

### User-Visible Registers

* User has access to these registers
* Available to all application programs

### Control and Status Registers

* IR - Stores the Current Instruction
* PC - Stores the Current Instruction Address
* PSW - Interrupts / Condition Codes

## Memory Structure

Closer to the CPU:

* Register
* Cache
  * Used to store subset of the most used instructions
* RAM
* Secondary Disk

The top four levels of memory in the figure are constructed using semi-conductor memory, which consists of semiconductor-based electronic circuits. NVM devices, at the fourth level, have several variants but in general are faster than hard disks. The most common form of NVM device is flash memory, which is popular in mobile devices such as smartphones and tablets.

### Loading a Program

Disk <span>&rarr;</span> Memory <span>&rarr;</span> Cache <span>&rarr;</span> Register
Loading to Memory is a must but depending on the frequency of the usage, the program may be loaded to Cache or to Register

## I/O Structure

### Device Controller

* Responsible for communication between device and the operating system / cpu
* The electronic component  that is in-charge of a specific device
* Accepts commands from the operating system
* Initiated by a device driver on the software level

A Typical Instruction to the controller would be like:

```c
Read
Sector 11,206
```

#### Responsible For

* Determine the current position of the head
* Move head to the required location
* Accept data bit by bit
* Store in a local buffer
* Perform checksum on the data

### Device Status Table

> Determines the status of the processes being executed by the device.
> Stores:
>
> * Device Type
> * Address
> * State

A device queue is maintained to store the processes requiring access to the input device until it is busy
This Queue stores the device address, file and operation to get to the operation as soon as the device is free

### Interrupts

[An interrupt is a signal generated by a hardware device (usually an I/O device) to get CPU’s attention](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=7)

[Interrupt transfers control to the interrupt service routine (ISR), generally through the interrupt vector table, which contains the addresses of all the service routines. The interrupt service routine executes; on completion the CPU resumes the interrupted computation.](assets/Operating%20Systems%20-%20CS604%20Handouts-20230917173807-mvuhx4l.pdf#page=7)

#### Hardware Interrupts

> Generated by hardware devices to signal attention

An ISR is executed for each interrupt and this ISR is mapped into the interrupt vector table.

#### Software Interrupts

> Generated by programs to impose that they want to request a system call

#### Traps

> Some error or condition occurred for which assistance of operating systems is required

Interchangeable called as ***exceptions***
