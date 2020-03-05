import Route from "@ember/routing/route";
import Note from "ember-project/utils/note-class";

export default Route.extend({
  model() {
    return Note.create();
  },
  actions: {
    reset(m) {
      m.set("content");
    }
  }
});
