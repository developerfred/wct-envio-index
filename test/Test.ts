import assert from "assert";
import { 
  TestHelpers,
  StakingRewardDistributor_Fed
} from "generated";
const { MockDb, StakingRewardDistributor } = TestHelpers;

describe("StakingRewardDistributor contract Fed event tests", () => {
  // Create mock db
  const mockDb = MockDb.createMockDb();

  // Creating mock for StakingRewardDistributor contract Fed event
  const event = StakingRewardDistributor.Fed.createMockEvent({/* It mocks event fields with default values. You can overwrite them if you need */});

  it("StakingRewardDistributor_Fed is created correctly", async () => {
    // Processing the event
    const mockDbUpdated = await StakingRewardDistributor.Fed.processEvent({
      event,
      mockDb,
    });

    // Getting the actual entity from the mock database
    let actualStakingRewardDistributorFed = mockDbUpdated.entities.StakingRewardDistributor_Fed.get(
      `${event.chainId}_${event.block.number}_${event.logIndex}`
    );

    // Creating the expected entity
    const expectedStakingRewardDistributorFed: StakingRewardDistributor_Fed = {
      id: `${event.chainId}_${event.block.number}_${event.logIndex}`,
      amount: event.params.amount,
    };
    // Asserting that the entity in the mock database is the same as the expected entity
    assert.deepEqual(actualStakingRewardDistributorFed, expectedStakingRewardDistributorFed, "Actual StakingRewardDistributorFed should be the same as the expectedStakingRewardDistributorFed");
  });
});
