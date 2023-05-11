import { MessageService } from "./message.service";

describe("Message Service", () => {
  let service: MessageService;

  beforeEach(() => {
    service = new MessageService();
  });

  it("should have no messages to start", () => {
    expect(service.messages.length).toEqual(0);
  });

  it("should add a message when the add is called", () => {
    //arrange
    const sampleMessage = "Hello world";

    //act
    service.add(sampleMessage);

    const [expected] = service.messages;
    //assert
    expect(service.messages.length).toEqual(1);
    expect(sampleMessage).toEqual(expected);
  });

  it("should clear messages when clear is called", () => {
    //arrange
    const sampleMessage = "Hello world";
    service.add(sampleMessage);

    //act
    service.clear();

    //expect
    expect(service.messages.length).toEqual(0);
  });
});
