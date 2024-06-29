# FILEPATH

class Button:
 """
 Represents a button component.

 Attributes:
  text (str): The text displayed on the button.
  color (str): The color of the button.
  size (str): The size of the button.
 """

 def __init__(self, text, color, size):
  """
  Initializes a new instance of the Button class.

  Args:
   text (str): The text displayed on the button.
   color (str): The color of the button.
   size (str): The size of the button.
  """
  self.text = text
  self.color = color
  self.size = size

 def click(self):
  """
  Simulates a button click event.
  """
  print(f"Button clicked: {self.text}")
