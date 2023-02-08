import { newMockEvent } from "matchstick-as"
import { ethereum, Address, BigInt } from "@graphprotocol/graph-ts"
import {
  SurveyCreated,
  SurveyEntersReviewStage,
  SurveyFinished
} from "../generated/MRFactory/MRFactory"

export function createSurveyCreatedEvent(
  survey: Address,
  questions: Array<string>,
  _name: string,
  _participants: BigInt,
  _endTime: BigInt,
  _capital: BigInt
): SurveyCreated {
  let surveyCreatedEvent = changetype<SurveyCreated>(newMockEvent())

  surveyCreatedEvent.parameters = new Array()

  surveyCreatedEvent.parameters.push(
    new ethereum.EventParam("survey", ethereum.Value.fromAddress(survey))
  )
  surveyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "questions",
      ethereum.Value.fromStringArray(questions)
    )
  )
  surveyCreatedEvent.parameters.push(
    new ethereum.EventParam("_name", ethereum.Value.fromString(_name))
  )
  surveyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_participants",
      ethereum.Value.fromUnsignedBigInt(_participants)
    )
  )
  surveyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_endTime",
      ethereum.Value.fromUnsignedBigInt(_endTime)
    )
  )
  surveyCreatedEvent.parameters.push(
    new ethereum.EventParam(
      "_capital",
      ethereum.Value.fromUnsignedBigInt(_capital)
    )
  )

  return surveyCreatedEvent
}

export function createSurveyEntersReviewStageEvent(
  survey: Address
): SurveyEntersReviewStage {
  let surveyEntersReviewStageEvent = changetype<SurveyEntersReviewStage>(
    newMockEvent()
  )

  surveyEntersReviewStageEvent.parameters = new Array()

  surveyEntersReviewStageEvent.parameters.push(
    new ethereum.EventParam("survey", ethereum.Value.fromAddress(survey))
  )

  return surveyEntersReviewStageEvent
}

export function createSurveyFinishedEvent(survey: Address): SurveyFinished {
  let surveyFinishedEvent = changetype<SurveyFinished>(newMockEvent())

  surveyFinishedEvent.parameters = new Array()

  surveyFinishedEvent.parameters.push(
    new ethereum.EventParam("survey", ethereum.Value.fromAddress(survey))
  )

  return surveyFinishedEvent
}
