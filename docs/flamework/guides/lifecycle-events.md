---
title: Lifecycle Events
---
Lifecycle events allow you to listen into events provided by Flamework. This page will cover all the ones provided by default.
In the case of singletons, these are called based off each singleton's loadOrder.

The following is a flow chart describing the startup process of Flamework.

<details>
	<summary>Execution Model</summary>
	<img src="/img/execution-model.png" alt="drawing" style={{width: "100%" }}/>
</details>

## OnStart

#### Compatible with: Service, Controller, Component

The OnStart lifecycle event is similar to OnInit, however, instead of calling each event sequentially, they are all called at the same time. This means yielding, or failures, in OnStart won't affect others.

## OnInit

#### Compatible with: Service, Controller

:::info Avoid Use
You should always use `OnStart` except in very rare circumstances where you need the unique behavior of `OnInit`.
:::

The OnInit lifecycle event is one of the initialization events. This is only called once, and the function must complete successfully before Flamework will call the next OnInit or other events.

Yielding in OnInit is not recommended, however it is possible and will delay the initialization of other singletons. You can also return a Promise and Flamework will wait for that promise to succeed before continuing.

It's also not recommended to use other dependencies inside, or prior to, OnInit. Only important initialization should be done here, and the rest can be done in the OnStart lifecycle event.

## OnTick

#### Compatible with: Service, Controller, Component

The OnTick event is a lifecycle event that is directly connected to the RunService.Heartbeat event.

It runs after physics has been done and is optimal for responding to changes in the physics state.

## OnPhysics

#### Compatible with: Service, Controller, Component

The OnPhysics event is a lifecycle event that is directly connected to the RunService.Stepped event.

It runs prior to physics has been done and is optimal for manipulating physics.

## OnRender

#### Compatible with: Controller, Component (Client)

The OnRender event is a lifecycle event that is directly connected to the RunService.RenderStepped event.

It runs prior to rendering.
