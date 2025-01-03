/*
 * Please refer to https://docs.envio.dev for a thorough guide on all Envio indexer features
 */
import {
  StakingRewardDistributor,
  StakingRewardDistributor_Fed,
  StakingRewardDistributor_Initialized,
  StakingRewardDistributor_Killed,
  StakingRewardDistributor_OwnershipTransferStarted,
  StakingRewardDistributor_OwnershipTransferred,
  StakingRewardDistributor_RecipientUpdated,
  StakingRewardDistributor_RewardsClaimed,
  StakingRewardDistributor_TokenCheckpointed,
} from "generated";

StakingRewardDistributor.Fed.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_Fed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    amount: event.params.amount,
  };

  context.StakingRewardDistributor_Fed.set(entity);
});

StakingRewardDistributor.Initialized.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_Initialized = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    version: event.params.version,
  };

  context.StakingRewardDistributor_Initialized.set(entity);
});

StakingRewardDistributor.Killed.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_Killed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
  };

  context.StakingRewardDistributor_Killed.set(entity);
});

StakingRewardDistributor.OwnershipTransferStarted.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_OwnershipTransferStarted = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.StakingRewardDistributor_OwnershipTransferStarted.set(entity);
});

StakingRewardDistributor.OwnershipTransferred.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_OwnershipTransferred = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    previousOwner: event.params.previousOwner,
    newOwner: event.params.newOwner,
  };

  context.StakingRewardDistributor_OwnershipTransferred.set(entity);
});

StakingRewardDistributor.RecipientUpdated.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_RecipientUpdated = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    oldRecipient: event.params.oldRecipient,
    newRecipient: event.params.newRecipient,
  };

  context.StakingRewardDistributor_RecipientUpdated.set(entity);
});

StakingRewardDistributor.RewardsClaimed.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_RewardsClaimed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    user: event.params.user,
    recipient: event.params.recipient,
    amount: event.params.amount,
    claimEpoch: event.params.claimEpoch,
    maxEpoch: event.params.maxEpoch,
  };

  context.StakingRewardDistributor_RewardsClaimed.set(entity);
});

StakingRewardDistributor.TokenCheckpointed.handler(async ({ event, context }) => {
  const entity: StakingRewardDistributor_TokenCheckpointed = {
    id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
    timestamp: event.params.timestamp,
    tokens: event.params.tokens,
  };

  context.StakingRewardDistributor_TokenCheckpointed.set(entity);
});
